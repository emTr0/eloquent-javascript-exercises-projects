// Write a program that creates a string that represents an 8x8 grid, using new-line characters to separate lines...

let chessboard = "";

size = 8;

for (let row = 1; row <= size; row++) {
    for (let chars = 1; chars <= size; chars++) {
        if ((row + chars) % 2 == 0) {
            chessboard += " ";
        } else {
            chessboard += "#";
        }
    }
    chessboard += "\n";
}

console.log(chessboard);