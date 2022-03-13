// 기본매개변수
// undefined 대신 할당된 기본값 출력할 때
var sendGreeting = function (message, userName) {
    if (message === void 0) { message = 'Hello'; }
    if (userName === void 0) { userName = 'everyone'; }
    return console.log("".concat(message, ", ").concat(userName));
};
sendGreeting(); // Hello, everyone
sendGreeting('Good morning'); // Good morning, everyone
sendGreeting('Good afternoon', 'Jenny'); //  Good afternoon, Jenny
