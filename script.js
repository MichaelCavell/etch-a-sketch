const container = document.getElementById('container');

    for (let i = 0; i < 256; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');
        container.appendChild(squareDiv);
    }

const squareDivs = document.querySelectorAll('.squareDiv');
function addHoverDivClass() {
    this.classList.add('hoverDiv');
}
function addMouseLeaveDivClass() {
    this.classList.add('mouseleaveDiv');
}
squareDivs.forEach(function(square) {
    square.addEventListener('mouseover', addHoverDivClass);
    square.addEventListener('mouseleave', addMouseLeaveDivClass);
});