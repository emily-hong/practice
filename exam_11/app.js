var Employee = /** @class */ (function () {
    function Employee(
    // access modifier 붙임
    _fullName, _age, _jobTitle, _hourlyRate, workingHoursPerWeek
    // 객체가 생성될 때, 컨스트럭터의 매개변수로 전달된 값은 객체의 프로퍼티 값으로 자동으로 그 값이 초기화되고 할당됨
    ) {
        var _this = this;
        this._fullName = _fullName;
        this._age = _age;
        this._jobTitle = _jobTitle;
        this._hourlyRate = _hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
        this.printEmployeeDetails = function () {
            console.log("".concat(_this.fullName, "\uC758 \uC9C1\uC5C5\uC740 ").concat(_this._jobTitle, "\uC774\uACE0 \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 ").concat(_this._hourlyRate * _this.workingHoursPerWeek, " \uB2EC\uB7EC \uC774\uB2E4."));
        };
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
