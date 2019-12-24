type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
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
