const pascal = function(n) {
    if (n === 1){
        const result = [1];
        return result
    }
    const result = pascal(n-1);
    result.splice(0, 0, 0);
    result.push(0);
    for (let i = 0; i < result.length-1; i++) {
        result[i] = result[i] + result[i+1]
    }
    result.pop();
    return result
};
  
// Do not edit below this line
module.exports = pascal;
