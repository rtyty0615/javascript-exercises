const totalIntegers = function (n) {
    let countIntegers = 0;
    if (typeof n === 'object' && n !== null) {
        const arr = Object.values(n);

        for (const element of arr){
            if (Number.isInteger(element)) {
                countIntegers += 1;
            };
            if (typeof element === 'object' && element !== null) {
                countIntegers += totalIntegers(element);
            }
        };
        return countIntegers
    }
};

// Do not edit below this line
module.exports = totalIntegers;
