// unknown type: we do not know what the user will input
// will not throw any error of type
let userInput: unknown; // bit more restrictive than any; better than any
let userName: string;

userInput = 5;
userInput = 'a';
// userName = userInput; // error because unknown is not assigned to string; no error if any
// needs extra type check; eg below
if (typeof userInput === 'string') {
    userName = userInput;
}

// never type
function generateError(message: string, code: number) {
    throw{ message: message, errorCode: code }; // returns never
}

const result = generateError('Error',500);
console.log(result)