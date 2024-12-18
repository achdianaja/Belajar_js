function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
    
    this.showName = function () {
        return this.fullName();
    }
}

var person1 = new Person("Cangcut", "Bolong");
var person2 = new Person("Kutang", "Badag");

person1.showName();
person2.showName();