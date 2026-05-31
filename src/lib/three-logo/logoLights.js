import * as THREE from "three";
import {
    BACKGROUND_PHASE_COLORS,
    TIMELINE,
} from "./logoConfig.js";

const clamp = THREE.MathUtils.clamp;

function normalize(value, start, end) {
    return clamp((value - start) / (end - start), 0, 1);
}

