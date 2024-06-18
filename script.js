const container = document.querySelector('.pixel-container');
const pixelButton = document.querySelector('.pixel-button');
let pixels = document.querySelectorAll('.pixel');
let activePixels = document.querySelectorAll('.active-pixel');
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
        pixel.classList.remove('active-pixel');
        pixel.classList.remove('drawn-pixel');
    })
}

function makeInactive(pixel) {
    pixel.classList.remove('active-pixel');
    pixel.classList.add('drawn-pixel');
}

function makeActive(pixel) {
    pixel.classList.add('active-pixel');
    activePixels = document.querySelectorAll('.active-pixel');
    activePixels.forEach(function(activePixel, index) {
        activePixel.addEventListener('mouseout', function() {
            makeInactive(activePixels[index]);
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

function buttonHover() {
    pixelButton.classList.add('active-button');
}

function buttonMouseOut() {
    pixelButton.classList.remove('active-button');
}

function clearPixels() {
    let pixel = container.lastElementChild;
        while (pixel) {
            container.removeChild(pixel);
            pixel = container.lastElementChild;
        }
}

function pixelPrompt() {
    pixelCount = parseInt(prompt('How many pixels per side? (min: 1 | max: 100)'));
    if (Number.isNaN(pixelCount) || pixelCount < 1 || pixelCount > 100) {
        alert('Please only enter a number value from 1 to 100');
    } else {
        clearPixels();
        makeGrid(pixelCount);
    }
}

if (!pixelCount) {
    makeGrid(16);
}

pixelButton.addEventListener('mouseover', buttonHover);
pixelButton.addEventListener('mouseout', buttonMouseOut);
pixelButton.addEventListener('click', pixelPrompt);
