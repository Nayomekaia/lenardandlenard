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
</script>
