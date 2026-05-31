import * as THREE from "three";
import {
    GLOBAL_SCALE,
    MODEL_BASE_SIZE,
    SEPARATOR_Z_OFFSET,
    LETTER_SCALE_MAP,
    LETTER_THICKNESS_MAP,
    RENDER_ORDER,
} from "./logoConfig.js";

export function createLetterItem(mesh, data, baseMaterial) {
    normalizeModelOrigin(mesh);

    const size = new THREE.Vector3();
    new THREE.Box3().setFromObject(mesh).getSize(size);

    const maxDim = Math.max(size.x, size.y, size.z);
    const extraScale = LETTER_SCALE_MAP[data.id] || 1;

    const baseScale =
        (MODEL_BASE_SIZE / maxDim) * GLOBAL_SCALE * extraScale;

    const thickness = LETTER_THICKNESS_MAP[data.id] || {
        x: 1,
        y: 1,
        z: 1,
    };

    const childMeshes = [];

    mesh.traverse((child) => {
        if (!child.isMesh) return;

        child.material = baseMaterial.clone();
        child.material.transparent = true;
        child.material.depthWrite = true;
        child.material.depthTest = true;

        childMeshes.push(child);
    });

