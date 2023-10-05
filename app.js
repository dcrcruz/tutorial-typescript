// unknown type: we do not know what the user will input
// will not throw any error of type
var userInput; // bit more restrictive than any; better than any
var userName;
userInput = 5;
userInput = 'a';
// userName = userInput; // error because unknown is not assigned to string; no error if any
// needs extra type check; eg below
if (typeof userInput === 'string') {
    userName = userInput;
}
// never type
// can specify that function returns never
function generateError(message, code) {
    throw { message: message, errorCode: code }; // returns never
}
var result = generateError('Error', 500);
console.log(result);
