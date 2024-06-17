const container = document.querySelector('.pixel-container');
let pixels = document.querySelectorAll('.pixel');
let activePixels = document.querySelectorAll('.active-pixel');

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

makeGrid(100);
