// 1, 9: rainbow
// 2, 7: yellow
// 3, 6: american
// 4, 5: orange
let puzzle = [[1, 1, 2, 3], [9, 3, 1, 8], [1, 7, 4, 6],
    [3, 1, 2, 8], [5, 1, 7, 8], [4, 8, 4, 3],
    [8, 2, 3, 4], [5, 2, 3, 7], [5, 6, 7, 5]];
//let puzzle = [[7, 9, 5, 4], [1, 1, 2, 4], [2, 5, 4, 3]];
let solution = puzzle.slice(0);
function rotate(arr, times) {
    for (let i = 0; i < times; i++) {
        arr = [arr[3], arr[0], arr[1], arr[2]];
    }
    return arr;
}

function rotateOnce(arr) {
    arr = [arr[3], arr[0], arr[1], arr[2]];
}

function findPair(arr1, arr2, arr1Loc, arr2Loc) {
    for (let rots = 0; rots < 4; rots++) {
        let rotatedArr = rotate(arr1, rots);
        if(arr2[arr2Loc] + rotatedArr[arr1Loc] === 9){
            return [rotatedArr, arr2];
        }
    }
    return [null, null];
}

function findSolution(thisPuzzle) {
    if(thisPuzzle.length === 1) {
        return [thisPuzzle[0]];
    }

    let foundSolution = false;
    for(let i = 0; i < thisPuzzle.length; i++) {
        let temp = thisPuzzle[0];
        thisPuzzle[0] = thisPuzzle[i];
        thisPuzzle[i] = temp;
        //Adds solution to the first to change puzzle
        //console.log("Size: " + thisPuzzle.length);
        //console.log("Puzzle: " + thisPuzzle);
        let tempPuzzle = [thisPuzzle[0]].concat(findSolution(thisPuzzle.slice(1)));
        //console.log("Size after: " + tempPuzzle.length);
        //console.log("Puzzle after: " + tempPuzzle);
        if(tempPuzzle[1] !== null) {

            [tempPuzzle[0], tempPuzzle[1]] = findPair(tempPuzzle[0], tempPuzzle[1], 1, 3);
            //console.log("Pair found: " + tempPuzzle[0] + ", " + tempPuzzle[1]);
            if(tempPuzzle[0] !== null) {
                thisPuzzle = tempPuzzle;
                foundSolution = true;
                break;
            }
        }
    }
    if(!foundSolution) {
        //console.log("no possible solution");
        return null;
    }
    return thisPuzzle;

}

solution = findSolution(solution);
console.log("Solution: ");
for(let i = 0; i < solution.length; i++) {
    console.log(solution[i]);
}