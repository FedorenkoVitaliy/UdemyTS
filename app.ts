function add(n1:number, n2: number): number {
  return n1 + n2;
}

function printResult(num:number): void {//not undefined, because undefined means well be return
  console.log('Result', num);
}

printResult(add(5,12));

let combineValues: (a:number, b: number) => number; //Function;

combineValues = add;
//combineValues = printResult;

console.log(combineValues(8, 8));