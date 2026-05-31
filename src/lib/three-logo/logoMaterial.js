import * as THREE from "three";

export function createLogoMaterial() {
    const grainTexture = createFineGrainTexture();
    const reflectionTexture = createChromeReflectionTexture();

    const logoMaterial = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#bcbee0"),

        metalness: 0.88,
        roughness: 0.45,

        clearcoat: 1,
        clearcoatRoughness: 0.3,

        envMap: reflectionTexture,
        envMapIntensity: 1.25,

        bumpMap: grainTexture,
        bumpScale: 0.04,

        roughnessMap: grainTexture,

        emissive: new THREE.Color("#B49A86"),
        emissiveIntensity: 0.05,

        transparent: true,
        opacity: 1,
    });

    return {
        logoMaterial,
        grainTexture,
        reflectionTexture,
    };
}

function createFineGrainTexture(size = 1024) {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    const imageData = ctx.createImageData(size, size);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const grain = Math.random();

        const value =
            grain > 0.5
                ? 185 + Math.random() * 70
                : 35 + Math.random() * 90;

        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 255;
    }

    ctx.putImageData(imageData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(65, 65);
    texture.colorSpace = THREE.NoColorSpace;
    texture.needsUpdate = true;

    return texture;
}

function createChromeReflectionTexture(size = 2048) {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size / 2;

    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, size, 0);

    [
        [0.0, "#080808"],
        [0.12, "#151515"],
        [0.14, "#d9dee0"],
        [0.22, "#f2f4f5"],
        [0.24, "#202020"],
        [0.42, "#101010"],
        [0.45, "#c5cbd0"],
        [0.56, "#eef1f2"],
        [0.58, "#121212"],
        [0.78, "#080808"],
        [0.82, "#b9c0c4"],
        [1.0, "#101010"],
    ].forEach(([stop, color]) => {
        gradient.addColorStop(stop, color);
    });

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size / 2);

    for (let i = 0; i < 80; i++) {
        const x = Math.random() * size;
        const width = 8 + Math.random() * 90;
        const alpha = 0.018 + Math.random() * 0.055;
        const color = Math.random() > 0.5 ? "238,241,242" : "10,10,10";

        ctx.fillStyle = `rgba(${color},${alpha})`;
        ctx.fillRect(x, 0, width, size / 2);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.needsUpdate = true;

    return texture;
}