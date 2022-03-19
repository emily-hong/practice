class Employee {
  constructor(
    // access modifier 붙임
    private _fullName:string,
    private _age:number,
    private _jobTitle:string,
    private _hourlyRate:number,
    public workingHoursPerWeek: number
    // 객체가 생성될 때, 컨스트럭터의 매개변수로 전달된 값은 객체의 프로퍼티 값으로 자동으로 그 값이 초기화되고 할당됨
  ) {
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(value:string) {
    this._fullName = value;
  }

  printEmployeeDetails = (): void => {
    console.log(`${this.fullName}의 직업은 ${this._jobTitle}이고 일주일의 수입은 ${this._hourlyRate * this.workingHoursPerWeek} 달러 이다.`);
  }
}