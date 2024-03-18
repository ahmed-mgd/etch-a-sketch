let mouseDown = 0;
document.body.onmousedown = () => { mouseDown++; };
document.body.onmouseup = () => { mouseDown--; };

function toggleHover (e) {
    if (mouseDown) {
        e.target.style.backgroundColor = "black";
    } else {
        e.target.classList.toggle("square-shaded");
    }
}

const container = document.createElement("div");
container.setAttribute("id", "container");

const size = 16;
for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);

        square.addEventListener("mouseover", toggleHover);
        square.addEventListener("mouseout", toggleHover);
    }
    container.appendChild(row);
}

document.body.appendChild(container);