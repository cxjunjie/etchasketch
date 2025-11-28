const container = document.querySelector(".container");
const button = document.querySelector("#resetGrid");

const containerSize = 640;

function createGrid(gridSize) {
    // clear existing squares
    container.innerHTML = "";

    const totalSquares = gridSize * gridSize;
    const squareSize = containerSize / gridSize;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}

createGrid(16);


button.addEventListener("click", () => {
    let input = prompt("Enter number of squares per side (max 100):");

    if (input === null) {
        alert("Please input a valid positive number.");
        return;
    }

    const newSize = parseInt(input, 10);

    if (newSize > 100) {
        alert("Please input a number less than or equal to 100.");
        return;
    }

    createGrid(newSize);
});