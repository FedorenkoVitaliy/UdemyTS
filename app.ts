function combine(
  input1: number|string,
  input2: number|string,
  resultConversion: 'as-number' | 'as-text'
) {
  if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
    return + input1 +  + input2;
  }
  else{
    return input1.toString() + input2.toString();
  }
}

console.log('Combined Ages:', combine(30, 26, 'as-number'));
console.log('Combined String Ages:', combine('30', '26', 'as-number'));
console.log('Combined Names:', combine('Max', 'Anna', 'as-text'));
