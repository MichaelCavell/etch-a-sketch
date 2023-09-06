//Create square divs
const container = document.getElementById('container');
let numberOfSquares = 256;
let pxCount = 25;

function squareCreator(numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++) {
        let initialSquares = document.createElement('div');
        initialSquares.classList.add('squareDiv');
        container.appendChild(initialSquares);
    }
}

squareCreator(numberOfSquares);

let squareDivs = document.querySelectorAll('.squareDiv');
function setHeight() {
    squareDivs.forEach(function(squareDiv) {
        squareDiv.style.height = `${pxCount}px`;
    });
}
function setWidth() {
    squareDivs.forEach(function(squareDiv) {
        squareDiv.style.width = `${pxCount}px`;
    });
}

setHeight();
setWidth();

//Hover and color changes
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

//
const button = document.getElementById("clickMe");
button.addEventListener("click", handleClick);
let sidePercent = 0; 
function percentCalc(userInput) {
    return ((400 / userInput) / 400);
}
function deleteDivs() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
} 

function handleClick() {
    let userInput = prompt("How many squares per side? (0 - 100)");
    if (userInput >= 0 && userInput <= 100) {
        numberOfSquares = userInput * userInput;
        sidePercent = percentCalc(userInput);
        pxCount = sidePercent * 400;
        
        deleteDivs();
        
        squareCreator(numberOfSquares);
        
        squareDivs = document.querySelectorAll('.squareDiv');
        setHeight();
        setWidth();
        squareDivs.forEach(function(square) {
            square.addEventListener('mouseover', addHoverDivClass);
            square.addEventListener('mouseleave', addMouseLeaveDivClass);
        });
    }
}
