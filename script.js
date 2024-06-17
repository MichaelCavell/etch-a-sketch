const container = document.querySelector('.pixel-container');

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
}

makeGrid(16);