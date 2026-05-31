// =====================================================
// CONFIG
// =====================================================
export const GLOBAL_SCALE = 1;
export const MODEL_BASE_SIZE = 1.8;
export const SEPARATOR_Z_OFFSET = 0.4;

export const CAMERA_Z = {
    desktop: 20,
    tablet: 45,
    mobile: 50,
    smallMobile: 60,
    zoomAmount: 12,
};

export const RENDER_ORDER = {
    normal: 1,
    topLetter: 999,
    activeTop: 9999,
    separator: 10000,
};

export const TIMELINE = {
    phase1End: 0.45,
    phase2End: 1.25,
    phase3End: 1.72,
    phase4End: 2.15,
    phase5End: 2.8,
    phase6End: 3.05,
    phase7End: 3.3,
};

export const LETTER_SCALE_MAP = {
    A: 1.19,
    1: 1.5,
    2: 1.1,
};

export const LETTER_THICKNESS_MAP = {
    "|": { x: 2.6, y: 1, z: 1 },
};

export const LETTERS = [
    { id: "L", file: "L.glb", x: -12 },
    { id: "E", file: "E.glb", x: -10 },
    { id: "N", file: "N.glb", x: -8 },
    { id: "A", file: "A.glb", x: -6 },
    { id: "R", file: "R.glb", x: -4 },
    { id: "D", file: "D.glb", x: -2 },

    { id: "|", file: "separator.glb", x: 0 },

    { id: "D", file: "D1.glb", x: 2 },
    { id: "2", file: "R1.glb", x: 4 },
    { id: "A", file: "A1.glb", x: 6 },
    { id: "N", file: "N1.glb", x: 8 },
    { id: "E", file: "E1.glb", x: 10 },
    { id: "L", file: "L1.glb", x: 12 },
];

export const PHASE_3_LAYOUT = {
    leftL: {
        land: {
            x: -0.65,
            y: -3.05,
            z: 0.12,
            rotX: 0.05,
            rotY: -0.08,
            rotZ: -0.55,
        },
        top: {
            x: -0.65,
            y: 3.15,
            z: 0.12,
            rotX: 0.05,
            rotY: -0.08,
            rotZ: -0.55,
        },
    },

    center: {
        land: {
            x: -0.95,
            y: -3.35,
            z: 0.05,
            rotX: 0,
            rotY: 0,
            rotZ: Math.PI / 2,
        },
        top: {
            x: -0.95,
            y: 3.35,
            z: 0.05,
            rotX: 0,
            rotY: 0,
            rotZ: Math.PI / 2,
        },
    },

    rightL: {
        land: {
            x: 0.95,
            y: -3.25,
            z: 0.1,
            rotX: 0.02,
            rotY: 0.05,
            rotZ: 0,
        },
        top: {
            x: 0.95,
            y: 3.25,
            z: 0.1,
            rotX: 0.02,
            rotY: 0.05,
            rotZ: 0,
        },
    },
};

export const PHASE_4_END_LAYOUT = {
    leftL: {
        x: 5,
        y: 3,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: Math.PI / -2,
    },

    center: {
        x: -5,
        y: 0,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: Math.PI / 2,
    },

    rightL: {
        x: 5,
        y: -3,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: -Math.PI / 2,
    },
};

export const PHASE_5_FINAL_LAYOUT = {
    leftL: {
        x: -1.4,
        y: -0.65,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: 1.58,
    },

    center: {
        x: 1.5,
        y: -1.15,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: Math.PI / 2,
    },

    rightL: {
        x: 0,
        y: 0.2,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: 1.585,
    },
};

export const PHASE_6_FINAL_LAYOUT = {
    leftL: {
        x: -2,
        y: 0,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: 0,
    },

    center: {
        x: 0,
        y: 0,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: 0,
    },

    rightL: {
        x: 2,
        y: 0,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: 0,
    },
};

