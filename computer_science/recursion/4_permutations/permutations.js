const permutations = function(arr) { // [1,2]
    const n = arr.length;
    const arrNew = [];
    if ( n <= 1){
        return [arr]
    };
// 
    console.log(arr);
    const x = arr.pop();
    console.log(x);
    console.log(arr);
    const y = permutations(arr);
    console.log(y);
    for (const element of y) { // [[1]], element = [1]
        for (let i = 0; i < n; i++) {
            const elementNew = [...element]; // n = 2, 
            elementNew.splice(i, 0, x); // [1,2]
            arrNew.push(elementNew)
        }
    }
    return arrNew
    
}
// arr [1] - [[1]]
// arr [1, 2] -[ [1, 2] , [2, 1]]
// arr 3 - 
//     [1, 2, 3],
//     [1, 3, 2],
//     [2, 1, 3],
//     [2, 3, 1],
//     [3, 1, 2],
//     [3, 2, 1],
// arr 4 -
//     [1, 2, 3, 4],
//     [1, 2, 4, 3],
//     [1, 3, 2, 4],
//     [1, 3, 4, 2],
//     [1, 4, 2, 3],
//     [1, 4, 3, 2],
//     [2, 1, 3, 4],
//     [2, 1, 4, 3],
//     [2, 3, 1, 4],
//     [2, 3, 4, 1],
//     [2, 4, 1, 3],
//     [2, 4, 3, 1],
//     [3, 1, 2, 4],
//     [3, 1, 4, 2],
//     [3, 2, 1, 4],
//     [3, 2, 4, 1],
//     [3, 4, 1, 2],
//     [3, 4, 2, 1],
//     [4, 1, 2, 3],
//     [4, 1, 3, 2],
//     [4, 2, 1, 3],
//     [4, 2, 3, 1],
//     [4, 3, 1, 2],
//     [4, 3, 2, 1],


// Do not edit below this line
module.exports = permutations;
