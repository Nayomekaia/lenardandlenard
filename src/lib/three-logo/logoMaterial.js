import * as THREE from "three";

export function createLogoMaterial() {
    const grainTexture = createFineGrainTexture();
    const reflectionTexture = createChromeReflectionTexture();

    const logoMaterial = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#bcbee0"),
