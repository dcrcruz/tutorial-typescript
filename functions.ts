function add(n1:number, n2: number) {
    return n1+n2;
}

// void type - does not exist in JS
function printResult(num: number) { 
    console.log('Result: ' + num); // returns void
}

function addHandle(n1: number, n2: number, cb: (n: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5,12));

// let combineValues: Function; // Function type
let combineValues: (a: number, b: number) => number; // tells TS that the function needs two parameters of 'number' type

combineValues = add;
// combineValues = printResult; // returns undefined because although printResult is a function, it does not take two parameters

console.log(combineValues(1,1));

addHandle(1,2, (result) => {
    console.log(result);
})