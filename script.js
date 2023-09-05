const container = document.getElementById('container');

    for (let i = 0; i < 256; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');
        container.appendChild(squareDiv);
    }


const squareDivs = document.querySelectorAll(".squareDiv");
squareDivs.forEach(function(square) {
    square.addEventListener("mouseover", function() {
        square.classList.remove("squareDiv");
        square.classList.add("mouseoverDiv");
    });
})