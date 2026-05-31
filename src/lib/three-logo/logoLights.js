import * as THREE from "three";
import {
    BACKGROUND_PHASE_COLORS,
    TIMELINE,
} from "./logoConfig.js";

const clamp = THREE.MathUtils.clamp;

function normalize(value, start, end) {
    return clamp((value - start) / (end - start), 0, 1);
}

export function createLogoLights(scene) {
    const phaseLights = {
        phaseColorLight: new THREE.DirectionalLight("#B49A86", 0.18),
        phaseColorFillLight: new THREE.DirectionalLight("#B49A86", 0.12),
        phaseColorGlowLight: new THREE.PointLight("#B49A86", 0.2, 60),
    };

    const baseLights = [
        new THREE.AmbientLight("#B49A86", 0.62),
        new THREE.HemisphereLight(0xe8eef7, 0x927c6f, 0.82),

        createDirectionalLight("#B49A86", 0.5, [0, 2, 11]),
        createDirectionalLight("#bcbee0", 0.52, [-6, 6, 8]),
        createDirectionalLight("#cfd1f5", 0.52, [6, 6, 8]),

