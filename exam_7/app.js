function sendGreeting(message, userName) {
    console.log("".concat(message, ", ").concat(userName));
}
// void: 아무것도 반환하지 않는 함수의 반환 값으로만 사용될 수 있는 타입
sendGreeting('Hello', 'Make');
// sendGreeting('Hello');  // 함수에 정의된 모든 매개 변수가 함수에 필요하다고 가정
// 함수 호출 시 타입스크립트 컴파일러는 정의된 매개변수와 호출될때의 argument를 비교검사를 함
// 비교시 인자수가 일치하지 않으면 eror
// 인자하나만 전달하고 싶을때 선택적 매개변수 사용 (useName에 ?사용)
sendGreeting('Hello');
// 전달되는 매개변수가 여러개이고 몇가지만 선택적 매개변수인 경우
