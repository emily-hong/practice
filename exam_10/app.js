var Employee = /** @class */ (function () {
    function Employee(fullName, age, jobTitle, hourlyRate, workingHoursPerWeek) {
        var _this = this;
        this.printEmployeeDetails = function () {
            console.log("".concat(_this.fullName, "\uC758 \uC9C1\uC5C5\uC740 ").concat(_this.jobTitle, "\uC774\uACE0 \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 ").concat(_this.hourlyRate * _this.workingHoursPerWeek, " \uB2EC\uB7EC \uC774\uB2E4."));
        };
        // Property = 전달된 매게변수(Parameter)
        this._fullName = fullName;
        this.age = age;
        this.jobTitle = jobTitle;
        this.hourlyRate = hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
// 클래스의 인스턴스
// 클래스를 통해서 객체를 생성할 때, Constructor(생성자)에 정의된 Parameter(매개변수들)의 값이, Arguments로 전달 되어야함
var employee1 = new Employee('Jane Hong', 28, '개발자', 30, 40);
console.log(employee1.fullName);
employee1.fullName = '헨리';
employee1.jobTitle = '개발자';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 50;
employee1.printEmployeeDetails();
