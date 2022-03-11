//  enum
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Male"] = 0] = "Male";
    GenderType[GenderType["Female"] = 1] = "Female";
})(GenderType || (GenderType = {}));
var student1 = {
    studentID: 122231,
    studentName: 'Janet Kim',
    age: 29,
    gender: 'female',
    subject: 'Nodejs',
    courseCompleted: false
};
// ? : option 값이 됨
// 인터페이스를 타입으로 가지는 값은 인터페이스의 구조를 그 값으로 가지도록 강제된다.
function getStudentDetailes(studentID) {
    // 함수의 반환값은 인터페이스(Student)에 정의된 프로퍼티들을 가져야함
    return {
        studentID: 12345,
        studentName: 'Jenny Kim',
        // age: 21,
        gender: 'female',
        subject: 'Javascript',
        courseCompleted: true
    };
}
function saveStudentDetails(student) {
    // student.studentID=12222;  // 읽기전용이기 때문에 할당될 수 없음
}
saveStudentDetails(student1);
