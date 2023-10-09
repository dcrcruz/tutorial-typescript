"use strict";
console.log("Hello TS World");
function add(n1, n2, showResult, phrase) {
    console.log(typeof number1); // typeof gets what type is the var - this is regular JS operator
    // the code below is JS way and is dynamic
    // if(typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }
    const result = n1 + n2;
    if (showResult) { // truthy
        // console.log(phrase + n1 + n2); will be a bug; will add all as string
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
// explicit way of declaring types; no need in TS
// let = var || number1: number
// let number1 : number
const number1 = 5; // can be 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
const result = add(number1, number2, printResult, resultPhrase);
// console.log(result);
