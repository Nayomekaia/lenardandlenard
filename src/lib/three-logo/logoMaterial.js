import * as THREE from "three";

export function createLogoMaterial() {
    const grainTexture = createFineGrainTexture();
    const reflectionTexture = createChromeReflectionTexture();

    const logoMaterial = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#bcbee0"),

        metalness: 0.88,
        roughness: 0.45,

        clearcoat: 1,
        clearcoatRoughness: 0.3,

        envMap: reflectionTexture,
        envMapIntensity: 1.25,

        bumpMap: grainTexture,
        bumpScale: 0.04,

        roughnessMap: grainTexture,

        emissive: new THREE.Color("#B49A86"),
        emissiveIntensity: 0.05,

        transparent: true,
        opacity: 1,
    });

    return {
        logoMaterial,
        grainTexture,
        reflectionTexture,
    };
}

function createFineGrainTexture(size = 1024) {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    const imageData = ctx.createImageData(size, size);
    const data = imageData.data;

