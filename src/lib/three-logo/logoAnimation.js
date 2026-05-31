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

export function applyAnimationPhases(letters, phases) {
    letters.forEach((item) => {
        resetTransform(item);

        applyPhase1(item, phases.phase1.eased);
        applyBaseRenderOrder(item);
        applySeparatorZ(item);

        if (phases.phase2.raw > 0) {
            applyPhase2(item, phases.phase2.eased);
        }

        if (phases.phase3.raw > 0) {
            applyPhase3(item, phases.phase3.raw);
        }

        if (phases.phase4.raw > 0) {
            applyPhase4(item, phases.phase4.eased);
        }

        if (phases.phase5.raw > 0) {
            applyPhase5(item, phases.phase5.eased);
        }

        if (phases.phase6.raw > 0) {
            applyPhase6(item, phases.phase6.eased);
        }

        if (phases.phase7.raw > 0) {
            applyPhase7(item, phases.phase7.eased);
        }
    });
}

function getPhase2State(role, t = 1) {
    const swirl = t * Math.PI * 2.6;

    const offsets = {
        leftL: 0,
        center: Math.PI * 0.7,
        rightL: Math.PI * 1.4,
    };

    const angle = swirl + offsets[role.key];

    const radiusX = lerp(5.2, 2.2, t);
    const radiusY = lerp(3.4, 1.4, t);
    const depth = lerp(5.5, 2.2, t);

    const centerY = lerp(-0.2, 2.75, t);

    return {
        x: Math.cos(angle) * radiusX,
        y: centerY + Math.sin(angle * 1.1) * radiusY,
        z: Math.sin(angle) * depth,
        rotX: Math.sin(angle) * 1.1,
        rotY: Math.cos(angle) * 1.3,
        rotZ: angle * 0.55,
        depth,
    };
}

function applyPhase1(item, t) {
    const { mesh, originalX, compactX, role } = item;

    mesh.position.x = lerp(originalX, compactX, t);

    if (!role.isTopLetter && !role.isCenter) {
        const speed = Math.abs(originalX) / 12;
        setOpacity(item, Math.max(0, 1 - t / speed));
    }
}

function applyPhase2(item, t) {
    if (!item.role.isActive) return;

    const { mesh, compactX } = item;
    const state = getPhase2State(item.role, t);

    mesh.position.x = lerp(compactX, state.x, t);
    mesh.position.y = lerp(0, state.y, t);
    mesh.position.z = lerp(0, state.z, t);

    applySeparatorZ(item);
