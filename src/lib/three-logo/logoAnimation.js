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

export function getPhases(scrollProgress) {
    const phase1 = normalize(scrollProgress, 0, TIMELINE.phase1End);

    const phase2 = normalize(
        scrollProgress,
        TIMELINE.phase1End,
        TIMELINE.phase2End,
    );

    const phase3 = normalize(
        scrollProgress,
        TIMELINE.phase2End,
        TIMELINE.phase3End,
    );

    const phase4 = normalize(
        scrollProgress,
        TIMELINE.phase3End,
        TIMELINE.phase4End,
    );

    const phase5 = normalize(
        scrollProgress,
        TIMELINE.phase4End,
        TIMELINE.phase5End,
    );

    const phase6 = normalize(
        scrollProgress,
        TIMELINE.phase5End,
        TIMELINE.phase6End,
    );

    const phase7 = normalize(
        scrollProgress,
        TIMELINE.phase6End,
        TIMELINE.phase7End,
    );

    return {
        phase1: {
            raw: phase1,
            eased: easeOutCubic(phase1),
        },
        phase2: {
            raw: phase2,
            eased: easeOutCubic(phase2),
        },
        phase3: {
            raw: phase3,
            eased: phase3,
        },
        phase4: {
            raw: phase4,
            eased: easeOutQuart(phase4),
        },
        phase5: {
            raw: phase5,
            eased: easeOutQuart(phase5),
        },
        phase6: {
            raw: phase6,
            eased: easeOutCubic(phase6),
        },
        phase7: {
            raw: phase7,
            eased: easeOutCubic(phase7),
        },
    };
}

export function updateCamera(camera, startZ, endZ, phases) {
    if (phases.phase7.raw > 0) {
        camera.position.z = lerp(endZ, startZ, phases.phase7.eased);
        return;
    }

    camera.position.z = lerp(startZ, endZ, phases.phase1.eased);
}

