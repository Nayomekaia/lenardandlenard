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

