<script>
    /* base */
    import { onMount } from "svelte";
    import * as THREE from "three";
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
</script>
