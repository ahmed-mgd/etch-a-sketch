function colorSquare (event) {
    event.target.style.backgroundColor = color;
}

function toggleHover (event) {
    if (mouseDown && event.type === "mouseover") {
        colorSquare(event);
    } else {
        event.target.classList.toggle("square-shaded");
    }
}

function clearGrid() {
    const grid = document.querySelector("#grid");
    document.body.removeChild(grid);
}

function generateGrid (size) {
    const grid = document.createElement("div");
    grid.setAttribute("id", "grid");
    
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
            
            square.addEventListener("mouseover", toggleHover);
            square.addEventListener("mouseout", toggleHover);
            square.addEventListener("click", colorSquare);
        }
        grid.appendChild(row);
    }
    
    document.body.appendChild(grid);
}

// TODO: Add palette
const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
    color = "gray";
});
let color = "black";

let mouseDown = 0;
document.body.onmousedown = () => { 
    mouseDown++; 
}
document.body.onmouseup = () => { 
    mouseDown--; 
}

const resizeBtn = document.querySelector("#resize-button");
const sizeInput = document.querySelector("#size");
resizeBtn.addEventListener("click", () => {
    const newSize = sizeInput.value;
    if (newSize >= 1 && newSize <= 100) {
        clearGrid();
        generateGrid(newSize);
    } else {
        alert("Size must be between 1 and 100!");
    }
});

const defaultSize = 16;
generateGrid(defaultSize);
