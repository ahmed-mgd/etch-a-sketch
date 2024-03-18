
function colorSquare (event) {
    event.target.style.backgroundColor = "black";
}

function toggleHover (event) {
    if (mouseDown && event.type === "mouseover") {
        colorSquare(event);
    } else {
        event.target.classList.toggle("square-shaded");
    }
}

function clearGrid() {
    const grid = document.querySelector("#container");
    document.body.removeChild(grid);
}

function generateGrid (size) {
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    
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
        container.appendChild(row);
    }
    
    document.body.appendChild(container);
}

let mouseDown = 0;
document.body.onmousedown = () => { 
    mouseDown++; 
}
document.body.onmouseup = () => { 
    mouseDown--; 
}

const resizeBtn = document.querySelector("#resize");
const sizeInput = document.querySelector("#size");
resizeBtn.addEventListener("click", () => {
    clearGrid();
    generateGrid(sizeInput.value);
});

const defaultSize = 16;
generateGrid(defaultSize);
