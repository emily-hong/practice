var Employee = /** @class */ (function () {
    function Employee() {
        var _this = this;
        this.printEmployeeDetails = function () {
            console.log("".concat(_this.fullName, "\uC758 \uC9C1\uC5C5\uC740 ").concat(_this.jobTitle, "\uC774\uACE0 \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 ").concat(_this.hourlyRate * _this.workingHoursPerWeek, " \uB2EC\uB7EC \uC774\uB2E4."));
        };
    }
    return Employee;
}());
// 클래스의 인스턴스
var employee1 = new Employee();
employee1.fullName = 'Jane';
employee1.jobTitle = '개발자';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 50;
employee1.printEmployeeDetails();
