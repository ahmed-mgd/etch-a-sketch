# etch-a-sketch

## Description
An Etch-A-Sketch application focused on DOM manipulation with Javascript.

## Features
1. Versatile color palette and eraser tool
2. Ability to resize and reset grid

## Challenges
- When the user hovers over a square, it was slightly difficult to differentiate between "highlighting" (mouse up) and "shading" (mouse down) while minimizing points of control. I ultimately used a variable to keep track of the state of the mouse (up/down) and used a single toggle function to check the status and change the square accordingly.
- I initially used a class for "highlighting" squares and modified the inline CSS for actually "shading" the squares. This was problematic as inline CSS takes precedence over the class. As a result, once the square is erased (reset to gray), the highlighting no longer appears. To solve this issue, I instead manipulated the opacity for highlighting so that there would be no conflicts with the shading logic.

## Credits
Project concept derived from The Odin Project.
https://www.theodinproject.com/lessons/foundations-etch-a-sketch