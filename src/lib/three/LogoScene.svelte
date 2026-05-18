<script>
    /* base */
    import { onMount } from "svelte";
    import * as THREE from "three";

    /* loaders for object */
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
    import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

    let container;

    onMount(() => {
        // SCENE
        const scene = new THREE.Scene();

        // ENVIRONMENT
        const envTexture = new THREE.CubeTextureLoader()
            .setPath("https://threejs.org/examples/textures/cube/Bridge2/")
            .load([
                "posx.jpg",
                "negx.jpg",
                "posy.jpg",
                "negy.jpg",
                "posz.jpg",
                "negz.jpg",
            ]);

        scene.environment = envTexture;
        scene.background = null;

        // LIGHTS
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        // CAMERA
        const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        );

        // RESPONSIVE CAMERA
        const updateCamera = () => {
            if (window.innerWidth <= 480) {
                camera.position.z = 60;
            } else if (window.innerWidth <= 768) {
                camera.position.z = 50;
            } else if (window.innerWidth <= 1024) {
                camera.position.z = 45;
            } else {
                camera.position.z = 20;
            }
        };

        updateCamera();

        // RENDERER
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.shadowMap.enabled = false;

        renderer.setSize(window.innerWidth, window.innerHeight);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        container.appendChild(renderer.domElement);

        // canvas should not block clicks/scrolling
        renderer.domElement.style.pointerEvents = "none";

        // DRACO
        const dracoLoader = new DRACOLoader();

        dracoLoader.setDecoderPath(
            "https://www.gstatic.com/draco/v1/decoders/",
        );

        const loader = new GLTFLoader();
        loader.setDRACOLoader(dracoLoader);

        // LOGO GROUP
        const logoGroup = new THREE.Group();
        scene.add(logoGroup);

        // global size
        const GLOBAL_SCALE = 1;

        // all letters
        const LETTERS = [
            { id: "L", file: "L.glb", x: -12 },
            { id: "E", file: "E.glb", x: -10 },
            { id: "N", file: "N.glb", x: -8 },
            { id: "A", file: "A.glb", x: -6 },
            { id: "R", file: "R.glb", x: -4 },
            { id: "D", file: "D.glb", x: -2 },

            { id: "1", file: "separator.glb", x: 0 },

            { id: "D", file: "D1.glb", x: 2 },
            { id: "2", file: "R1.glb", x: 4 },
            { id: "A", file: "A1.glb", x: 6 },
            { id: "N", file: "N1.glb", x: 8 },
            { id: "E", file: "E1.glb", x: 10 },
            { id: "L", file: "L1.glb", x: 12 },
        ];

        // LOAD MODELS
        LETTERS.forEach((letterData) => {
            loader.load(
                `/models/${letterData.file}`,

                (gltf) => {
                    const letter = gltf.scene;

                    // center model
                    const box = new THREE.Box3().setFromObject(letter);

                    const center = new THREE.Vector3();
                    box.getCenter(center);

                    letter.position.sub(center);

                    // calculate size
                    const extraScale =
                        LETTER_SCALE_MAP[letterData.id] ||
                        letterData.scale ||
                        1;

                    const size = new THREE.Vector3();
                    box.getSize(size);

                    const maxDim = Math.max(size.x, size.y, size.z);

                    const scale = (1.5 / maxDim) * GLOBAL_SCALE * extraScale;

                    letter.scale.setScalar(scale);

                    // set position
                    letter.position.x += letterData.x;

                    // apply material
                    letter.traverse((child) => {
                        if (child.isMesh) {
                            child.material = logoMaterial;
                        }
                    });

                    // add to scene
                    logoGroup.add(letter);

                    console.log("Loaded:", letterData.id);
                },

                undefined,

                (err) => console.error(err),
            );
        });
</script>
