const container = document.querySelector('.pixel-container');
const pixelButton = document.querySelector('.pixel-button');
const classicButton = document.querySelector('.classic-button');
const colorfulButton = document.querySelector('.colorful-button');
const shadingButton = document.querySelector('.shading-button');
let pixels = document.querySelectorAll('.pixel');
let currentMode;
let pixelCount;

function addPixelListeners() {
    pixels.forEach(function(pixel, index) {
        pixel.addEventListener('mouseover', function() {
            makeActive(pixels[index]);
        })
    })
}

function sketchRefresh() {
    pixels.forEach(function(pixel) {
        pixel.classList.remove('drawn-pixel');
    })
}

function generateRandomColor() {
    const roy = Math.floor(Math.random() * 256);
    const gee = Math.floor(Math.random() * 256);
    const biv = Math.floor(Math.random() * 256);
    const rgb = `rgb(${roy}, ${gee}, ${biv})`; 
    return rgb;
}

function makeInactive(pixel) {
    if (currentMode === 'colorful' && !(pixel.classList.contains('inactive'))) {
        console.log(pixel);
        const currentColor = generateRandomColor();
        pixel.style.backgroundColor = currentColor;
        pixel.classList.add('inactive');
    }

    if (currentMode === 'shading') {
        if (!pixel.style.opacity) {
            pixel.style.opacity = .1;

            pixel.addEventListener('mouseenter', function() {
                let currentOpacity = pixel.style.opacity;

                if (currentOpacity >= 1) {
                    return
                }

                let newOpacity = Number(currentOpacity) + .1;
                pixel.style.opacity = newOpacity;
            })
        }
    }
}

function makeActive(pixel) {
    pixel.classList.add('drawn-pixel');
    drawnPixels = document.querySelectorAll('.drawn-pixel');
    drawnPixels.forEach(function(drawnPixel, index) {
        drawnPixel.addEventListener('mouseenter', function() {
            makeInactive(drawnPixels[index]);
        })
    })
}

function makeGrid(sideCount) {
    for (let i = 0; i < sideCount; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);
        for (let j = 0; j < sideCount; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            column.appendChild(pixel); 
        }
    }
    
    pixels = document.querySelectorAll('.pixel');
    activePixels = document.querySelectorAll('.active-pixel');
    addPixelListeners();
    sketchRefresh();
}

function clearPixels() {
    let pixel = container.lastElementChild;
        while (pixel) {
            container.removeChild(pixel);
            pixel = container.lastElementChild;
        }
}

function pixelPrompt() {
    pixelCount = prompt('How many pixels per side? (min: 1 | max: 100)');
    
    if (!pixelCount) {
        return;
    }

    let pixelParsed = parseInt(pixelCount);

    if (Number.isNaN(pixelParsed) || pixelParsed < 1 || pixelParsed > 100) {
        alert('Please only enter a number value from 1 to 100');
    } else {
        clearPixels();
        makeGrid(pixelCount);
    }
}

function classicMode() {
    currentMode = null;

    if (!pixelCount) {
        clearPixels();
        makeGrid(16);
        return;
    }

    clearPixels();
    makeGrid(pixelCount);
}

function colorfulMode() {
    currentMode = 'colorful';

    if (!pixelCount) {
        clearPixels();
        makeGrid(16);
        return;
    }

    clearPixels();
    makeGrid(pixelCount);
}

function shadingMode() {
    currentMode = 'shading';

    if (!pixelCount) {
        clearPixels();
        makeGrid(16);
        return;
    }

    clearPixels();
    makeGrid(pixelCount);
}

if (!pixelCount) {
    makeGrid(16);
}

pixelButton.addEventListener('click', pixelPrompt);
classicButton.addEventListener('click', classicMode);
colorfulButton.addEventListener('click', colorfulMode);
shadingButton.addEventListener('click', shadingMode);




