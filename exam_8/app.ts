// 기본매개변수
// undefined 대신 할당된 기본값 출력할 때
const sendGreeting = (message= 'Hello', userName = 'everyone' ): void => console.log(`${message}, ${userName}`);

sendGreeting(); // Hello, everyone
sendGreeting('Good morning'); // Good morning, everyone
sendGreeting('Good afternoon', 'Jenny');  //  Good afternoon, Jenny
