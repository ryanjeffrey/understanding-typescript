let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'JF';

// 'unknown' type is more restrictive than 'any' type
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code }
}

generateError('An error occurred!', 500);