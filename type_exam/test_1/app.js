var student = {
    name: 'Jake',
    course: 'Getting Started with TypeScript',
    codingIQ: 80,
    code: function () {
        console.log('brain is working hard');
    }
};
// 타입추론
function calculateCodingIQ(lostPoints) {
    return 100 - lostPoints;
}
// 타입명시
var studentID = 12345;
var studentName = 'Jenny Kim';
var age = 21;
var gender = 'female';
var subject = 'Javascript';
var courseCompleted = false;
function getStudentDetailes(studentID) {
    return null;
}
// :void : 이 함수는 아무것도 반환하지 않다는것을 의미
// :object
