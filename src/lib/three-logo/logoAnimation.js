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

