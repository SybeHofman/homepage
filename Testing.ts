// 1, 9: rainbow
// 2, 7: yellow
// 3, 6: american
// 4, 5: orange
let puzzle = [[1, 1, 2, 3], [9, 3, 1, 8], [1, 7, 4, 6], 
              [3, 1, 2, 9], [5, 1, 7, 9], [4, 9, 4, 3],
              [9, 2, 3, 4], [5, 2, 3, 7], [5, 6, 7, 5]];

let solution: number[][] = [];

function rotate(arr: number[], times: number): number[] {
    for (let i = 0; i < times; i++) {
        arr = [arr[3], arr[0], arr[1], arr[2]];
    }
    return arr;
}

for (let i = 0; i < puzzle.length; i++) {
    solution.push(puzzle[0]);
    for (let rotOf1 = 0; rotOf1 < 4; rotOf1++) {
        solution.push(puzzle[1]);
        for(let rotOf2 = 0; rotOf2 < 4; rotOf2++) {
            if(solution[0][1] + puzzle[1][3] === 9){
                console.log(solution[0])
                console.log(puzzle[1]);
            }
            solution[1] = rotate(puzzle[1], rotOf2);
        }
    }
}