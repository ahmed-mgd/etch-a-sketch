# etch-a-sketch

## Description
An Etch-A-Sketch application focused on DOM manipulation with Javascript.

## Features
1. Versatile color palette and eraser tool
2. Ability to resize and reset grid

## Challenges
- When the user hovers over a square, it was slightly difficult to differentiate between "highlighting" (mouse up) and "shading" (mouse down) while minimizing points of control. I ultimately used a variable to keep track of the state of the mouse (up/down) and used a single toggle function to check the status and change the square accordingly.
- I initially used a class for "highlighting" squares and modified the inline CSS for actually "shading" the squares. This was problematic as inline CSS takes precedence over the class, so once the square is erased, the highlighting no longer appears.

## Credits
Project concept derived from The Odin Project.
https://www.theodinproject.com/lessons/foundations-etch-a-sketch