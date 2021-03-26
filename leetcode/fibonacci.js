/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    let array = [0, 1];
if (n < 2) {
    return n;
}

while (array.length < n + 1) {
    let value1 = array[array.length -1];
    let value2 = array[array.length -2];
    array.push(value1 + value2);
    if (array.length === n + 1) {
        return (array[array.length -1]);
    }
}
};