import * as THREE from "three";
import {
    TIMELINE,
    RENDER_ORDER,
    SEPARATOR_Z_OFFSET,
    PHASE_3_LAYOUT,
    PHASE_4_END_LAYOUT,
    PHASE_5_FINAL_LAYOUT,
    PHASE_6_FINAL_LAYOUT,
    PHASE_5_MOTION,
} from "./logoConfig.js";
import {
    applyScale,
    setOpacity,
    setDepthMode,
    resetTransform,
    applySeparatorZ,
    applyBaseRenderOrder,
} from "./logoObjects.js";

const clamp = THREE.MathUtils.clamp;
const lerp = THREE.MathUtils.lerp;

function normalize(value, start, end) {
    return clamp((value - start) / (end - start), 0, 1);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
}

function lerpState(start, end, t) {
    return {
        x: lerp(start.x, end.x, t),
        y: lerp(start.y, end.y, t),
        z: lerp(start.z, end.z, t),
        rotX: lerp(start.rotX, end.rotX, t),
        rotY: lerp(start.rotY, end.rotY, t),
        rotZ: lerp(start.rotZ, end.rotZ, t),
    };
}

function applyState(mesh, state) {
    mesh.position.set(state.x, state.y, state.z);
    mesh.rotation.set(state.rotX, state.rotY, state.rotZ);
}

