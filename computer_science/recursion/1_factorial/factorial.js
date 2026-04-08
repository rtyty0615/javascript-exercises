const factorial = function(n) {
    sum = 1;
    if (!Number.isInteger(n) || n < 0) {
        return undefined;
    };
    if (n === 1 || n === 0) {
        return sum;
    } else {
        return n * factorial(n-1);
    }
};

// Do not edit below this line
module.exports = factorial;