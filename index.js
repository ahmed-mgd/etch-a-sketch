function colorSquare (event) {
    event.target.style.backgroundColor = color;
}

function toggleHover (event) {
    if (mouseDown && event.type === "mouseover") {
        colorSquare(event);
    } 
    event.target.classList.toggle("square-selected");

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
const palette = document.querySelector("#color-picker");
const addColorBtn = document.querySelector("#add-color");
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
const resetBtn = document.querySelector("#reset-button");
const sizeInput = document.querySelector("#size");
resizeBtn.addEventListener("click", () => {
    const newSize = sizeInput.value;
    if (newSize >= 1 && newSize <= 100) {
        size = newSize;
        clearGrid();
        generateGrid(size);
    } else {
        alert("Size must be between 1 and 100!");
    }
});
resetBtn.addEventListener("click", () => {
    clearGrid();
    generateGrid(size);
})

let size = 16;
generateGrid(size);
