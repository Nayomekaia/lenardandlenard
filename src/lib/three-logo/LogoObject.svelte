<script>
    import { onMount } from "svelte";
    import * as THREE from "three";
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
    import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

    import { CAMERA_Z, LETTERS, TIMELINE } from "./logoConfig.js";
    import { createLogoMaterial } from "./logoMaterial.js";
    import { createLogoLights, updatePhaseLights } from "./logoLights.js";
    import {
        createLetterItem,
        disposeMaterial,
    } from "./logoObjects.js";
    import {
        getPhases,
        updateCamera,
        applyAnimationPhases,
    } from "./logoAnimation.js";

    let container;
    let animationSection;

    const clamp = THREE.MathUtils.clamp;

    function getCameraZ() {
        if (window.innerWidth <= 480) return CAMERA_Z.smallMobile;
        if (window.innerWidth <= 768) return CAMERA_Z.mobile;
        if (window.innerWidth <= 1024) return CAMERA_Z.tablet;

        return CAMERA_Z.desktop;
    }

    function getLogoStartY() {
        if (window.innerWidth <= 480) return 3.2;
        if (window.innerWidth <= 768) return 2.8;
        if (window.innerWidth <= 1024) return 2.4;

        return 2;
    }

    function smoothStep(value) {
        return value * value * (3 - 2 * value);
    }

    onMount(() => {
        // =====================================================
        // SCENE
        // =====================================================
        const scene = new THREE.Scene();

        const logoGroup = new THREE.Group();

        let logoStartY = getLogoStartY();
        logoGroup.position.y = logoStartY;

        scene.add(logoGroup);

        // =====================================================
        // LIGHTS
        // =====================================================
        const phaseLights = createLogoLights(scene);

        // =====================================================
        // CAMERA
        // =====================================================
        const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        );

        camera.position.z = getCameraZ();

        let cameraStartZ = camera.position.z;
        let cameraEndZ = cameraStartZ - CAMERA_Z.zoomAmount;

        // =====================================================
        // RENDERER
        // =====================================================
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.sortObjects = true;
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 0.82;
        renderer.domElement.style.pointerEvents = "none";

        container.appendChild(renderer.domElement);

        // =====================================================
        // LOADERS
        // =====================================================
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath(
            "https://www.gstatic.com/draco/v1/decoders/",
        );

        const loader = new GLTFLoader();
        loader.setDRACOLoader(dracoLoader);

        // =====================================================
        // MATERIAL / TEXTURE
        // =====================================================
        const {
            logoMaterial,
            grainTexture,
            reflectionTexture,
        } = createLogoMaterial();

        scene.environment = reflectionTexture;

        // =====================================================
        // MODEL LOADING
        // =====================================================
        const letters = [];

        LETTERS.forEach((letter) => {
            loader.load(`/models/${letter.file}`, (gltf) => {
                const item = createLetterItem(
                    gltf.scene,
                    letter,
                    logoMaterial,
                );

                letters.push(item);
                logoGroup.add(item.mesh);
            });
        });

        // =====================================================
        // SCROLL
        // =====================================================
        let targetScroll = 0;
        let currentScroll = 0;
        let animationFrameId;

        function handleScroll() {
            if (!animationSection) return;

            const rect = animationSection.getBoundingClientRect();
            const maxScroll =
                animationSection.offsetHeight - window.innerHeight;

            const sectionProgress = clamp(-rect.top / maxScroll, 0, 1);

            targetScroll = sectionProgress * TIMELINE.phase7End;
        }

        function handleResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.position.z = getCameraZ();

            cameraStartZ = camera.position.z;
            cameraEndZ = cameraStartZ - CAMERA_Z.zoomAmount;

            logoStartY = getLogoStartY();

            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            handleScroll();
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);

        // =====================================================
        // ANIMATION LOOP
        // =====================================================
        function animate() {
            animationFrameId = requestAnimationFrame(animate);

            currentScroll += (targetScroll - currentScroll) * 0.08;

            const phases = getPhases(currentScroll);

            updateCamera(camera, cameraStartZ, cameraEndZ, phases);
            updatePhaseLights(phaseLights, currentScroll);

            grainTexture.offset.set(0, 0);
            reflectionTexture.offset.set(0, 0);

            applyAnimationPhases(letters, phases);

            // =====================================================
            // START HIGHER, THEN MOVE BACK TO CENTER
            // =====================================================
            const introDuration = TIMELINE.phase7End * 0.12;
            const introProgress = clamp(currentScroll / introDuration, 0, 1);
            const smoothIntroProgress = smoothStep(introProgress);

            logoGroup.position.y = THREE.MathUtils.lerp(
                logoStartY,
                0,
                smoothIntroProgress,
            );

            renderer.render(scene, camera);
        }

        animate();
        handleScroll();

        // =====================================================
        // CLEANUP
        // =====================================================
        return () => {
            cancelAnimationFrame(animationFrameId);

            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);

            dracoLoader.dispose();

            grainTexture.dispose();
            reflectionTexture.dispose();
            logoMaterial.dispose();

            renderer.dispose();

            logoGroup.traverse((child) => {
                if (!child.isMesh) return;

                child.geometry?.dispose();
                disposeMaterial(child.material);
            });

            renderer.domElement?.parentNode?.removeChild(renderer.domElement);
        };
    });
</script>

<section bind:this={animationSection} class="animation-section">
    <div bind:this={container} class="three-container"></div>
</section>

<style>
    .animation-section {
        position: relative;
        height: calc(100vh + 6500px);
    }

    .three-container {
        position: sticky;
        top: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        pointer-events: none;
    }
</style>