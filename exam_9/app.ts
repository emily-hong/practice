class Employee {
  // 클래스 속에서 정의된 함수들은 클래스 내 정의된 변수들에게 접근 가능, 상대적으로 적은 매개변수를 가짐
  fullName: string;
  age: number;
  jobTitle: string;
  hourlyRate: number;
  workingHoursPerWeek: number;

  printEmployeeDetails = (): void => {
    console.log(`${this.fullName}의 직업은 ${this.jobTitle}이고 일주일의 수입은 ${this.hourlyRate * this.workingHoursPerWeek} 달러 이다.`);
  }
}

// 클래스의 인스턴스
let employee1 = new Employee();
employee1.fullName = 'Jane';
employee1.jobTitle = '개발자';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 50;
employee1.printEmployeeDetails();