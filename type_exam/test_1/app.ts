let student = {
  name: 'Jake',
  course: 'Getting Started with TypeScript',
  codingIQ: 80,
  code: function(){
    console.log('brain is working hard');
    
  }
}

// 타입추론
function calculateCodingIQ (lostPoints) {
  return 100 - lostPoints;
}

// 타입명시
let studentID:number = 12345;
let studentName:string = 'Jenny Kim';
let age:number = 21;
let gender:string = 'female';
let subject:string = 'Javascript';
let courseCompleted:boolean = false;

function getStudentDetailes(studentID: number) 
:{
  // 속성과 타입 지정, 반환되는 객체의 구조를 타입으로 지정
  studentID: number;
  studentName: string;
  age: number;
  gender: string;
  subject: string;
  createDate: Date;
} {
  return null;
}
// :void : 이 함수는 아무것도 반환하지 않다는것을 의미
// :object