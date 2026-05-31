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

export function resetTransform(item) {
    item.mesh.position.set(item.mesh.position.x, 0, 0);
    item.mesh.rotation.set(0, 0, 0);

    applyScale(item);
}

export function applySeparatorZ(item) {
    if (item.role.isSeparator) {
        item.mesh.position.z += SEPARATOR_Z_OFFSET;
    }
}

export function applyBaseRenderOrder(item) {
    if (item.role.isSeparator) {
        setDepthMode(item, RENDER_ORDER.separator, false, false);
        return;
    }

    if (item.role.isTopLetter) {
        setDepthMode(item, RENDER_ORDER.topLetter, false, false);
        return;
    }

    setDepthMode(item, RENDER_ORDER.normal, true, true);
}

export function disposeMaterial(material) {
    if (Array.isArray(material)) {
        material.forEach((item) => item.dispose());
        return;
    }

    material?.dispose();
}

function normalizeModelOrigin(mesh) {
    const box = new THREE.Box3().setFromObject(mesh);
    const center = new THREE.Vector3();

    box.getCenter(center);
    mesh.position.sub(center);
}

function getCompactX(originalX) {
    if (originalX < 0) return -2;
    if (originalX > 0) return 2;

    return 0;
}

function getRole(originalX) {
    const isLeftL = originalX === -12;
    const isRightL = originalX === 12;
    const isCenter = originalX === 0;

    const key = isLeftL
        ? "leftL"
        : isCenter
          ? "center"
          : isRightL
            ? "rightL"
            : null;

    return {
        key,
        isLeftL,
        isRightL,
        isCenter,
        isSeparator: isCenter,
        isTopLetter: isLeftL || isRightL,
        isActive: isLeftL || isRightL || isCenter,
    };
}