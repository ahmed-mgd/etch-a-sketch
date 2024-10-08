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

function swapTools (oldTool, newTool, newColor) {
    color = newColor;
    oldTool.classList.remove("selected-tool");
    selectedTool = newTool;
    newTool.classList.add("selected-tool");
}

let selectedTool, color;
const palette = document.querySelector("#palette");
const colorPicker = document.querySelector("#color-picker");
const colorOptions = ["black", "red", "green", "blue"];
const numColors = 4;
for (let i = 0; i < numColors; i++) {
    const colorOption = document.createElement("div");
    colorOption.classList.add("color-option");
    colorOption.style.backgroundColor = colorOptions[i];
    palette.insertBefore(colorOption, colorPicker);
    colorOption.addEventListener("click", () => {
        swapTools(selectedTool, colorOption, colorOptions[i]);
    });
    if (i === 0) {
        selectedTool = colorOption;
        color = colorOptions[i];
        colorOption.classList.add("selected-tool");
    }
}
colorPicker.addEventListener("click", () => {
    swapTools(selectedTool, colorPicker, colorPicker.value);
});
const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
    swapTools(selectedTool, eraser, "white");
});

let mouseDown = 0;
document.body.onmousedown = () => { 
    mouseDown++; 
}
document.body.onmouseup = () => { 
    mouseDown--; 
}

const resizeBtn = document.querySelector("#resize-button");
const resetBtn = document.querySelector("#reset-button");
const sizeInput = document.querySelector("#size-input");
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
