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

    const item = {
        mesh,
        childMeshes,
        baseScale,
        thickness,
        originalX: data.x,
        compactX: getCompactX(data.x),
        role: getRole(data.x),
    };

    applyScale(item);

    return item;
}

export function applyScale(item, multiplier = 1) {
    const { mesh, baseScale, thickness } = item;

    mesh.scale.set(
        baseScale * multiplier * thickness.x,
        baseScale * multiplier * thickness.y,
        baseScale * multiplier * thickness.z,
    );
}

export function setOpacity(item, opacity) {
    item.childMeshes.forEach((child) => {
        child.material.opacity = opacity;
    });
}

export function setDepthMode(item, renderOrder, depthTest, depthWrite) {
    item.mesh.renderOrder = renderOrder;

    item.childMeshes.forEach((child) => {
        child.renderOrder = renderOrder;
        child.material.depthTest = depthTest;
        child.material.depthWrite = depthWrite;
    });
}

