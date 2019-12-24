function combine(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
console.log('Combined Ages:', combine(30, 26));
console.log('Combined Names:', combine('Max', 'Anna'));
