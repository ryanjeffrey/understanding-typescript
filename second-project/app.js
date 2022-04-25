var userInput;
var userName;
userInput = 5;
userInput = 'JF';
// 'unknown' type is more restrictive than 'any' type
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
