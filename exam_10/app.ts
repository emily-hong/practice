class Employee {
  // 클래스 속에서 정의된 함수들은 클래스 내 정의된 변수들에게 접근 가능, 상대적으로 적은 매개변수를 가짐
  private _fullName: string; // 변수앞에 _사용하여 private을 나타냄
  age: number;
  jobTitle: string;
  hourlyRate: number;
  workingHoursPerWeek: number;

  constructor(fullName:string, age:number, jobTitle:string,
    hourlyRate:number, workingHoursPerWeek: number) {
      // Property = 전달된 매게변수(Parameter)
      this._fullName = fullName;
      this.age = age;
      this.jobTitle = jobTitle;
      this.hourlyRate = hourlyRate;
      this.workingHoursPerWeek = workingHoursPerWeek;
    }

  get fullName() {
    return this._fullName;
  }

  set fullName(value:string) {
    this._fullName = value;
  }

  printEmployeeDetails = (): void => {
    console.log(`${this.fullName}의 직업은 ${this.jobTitle}이고 일주일의 수입은 ${this.hourlyRate * this.workingHoursPerWeek} 달러 이다.`);
  }
}

// 클래스의 인스턴스
// 클래스를 통해서 객체를 생성할 때, Constructor(생성자)에 정의된 Parameter(매개변수들)의 값이, Arguments로 전달 되어야함
let employee1: Employee = new Employee('Jane Hong', 28, '개발자', 30, 40);
console.log(employee1.fullName);
employee1.fullName = '헨리';
employee1.jobTitle = '개발자';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 50;
employee1.printEmployeeDetails();