var student1 = {
    studentID: 122231,
    studentName: 'Janet Kim',
    age: 29,
    gender: 'female',
    subject: 'Nodejs',
    courseCompleted: false
};
// Student 인터페이스를 반환값의 타입으로 가지는 함수
function getStudentDetailes(studentID) {
    return {
        studentID: 12345,
        studentName: 'Jenny Kim',
        // age: 21,
        gender: 'male',
        subject: 'Javascript',
        courseCompleted: true
    };
}
function saveStudentDetails(student) { }
saveStudentDetails(student1);
