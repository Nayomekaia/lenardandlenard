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

        createDirectionalLight("#B49A86", 0.42, [-5, -3, 7]),
        createDirectionalLight("#bcbee0", 0.42, [5, -3, 7]),

        createPointLight("#B49A86", 0.9, 90, [0, 0.5, 10]),
        createPointLight("#e0d2c9", 0.7, 110, [0, -4, 9]),

        createDirectionalLight("#bcbee0", 0.32, [-7, 4, -6]),
        createDirectionalLight("#bcbee0", 0.32, [7, 4, -6]),
        createDirectionalLight("#B49A86", 0.22, [0, -2, -6]),
    ];

    phaseLights.phaseColorLight.position.set(7, 5, 7);
    phaseLights.phaseColorFillLight.position.set(0, 2, 8);
    phaseLights.phaseColorGlowLight.position.set(0, 1.5, 9);

    [...baseLights, ...Object.values(phaseLights)].forEach((light) => {
        scene.add(light);
    });

    return phaseLights;
}

export function updatePhaseLights(lights, scrollProgress) {
    const backgroundProgress = clamp(
        scrollProgress / TIMELINE.phase7End,
        0,
        1,
    );

    const phaseColor = getGradientPhaseColor(backgroundProgress);

    lights.phaseColorLight.color.copy(phaseColor);
    lights.phaseColorFillLight.color.copy(phaseColor);
    lights.phaseColorGlowLight.color.copy(phaseColor);

    lights.phaseColorLight.intensity = 0.18;
    lights.phaseColorFillLight.intensity = 0.12;
    lights.phaseColorGlowLight.intensity = 0.2;
}

function createDirectionalLight(color, intensity, position) {
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(...position);

    return light;
}
