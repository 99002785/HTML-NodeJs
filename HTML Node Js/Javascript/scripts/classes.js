/* var emp = {}
emp.empId = 123
emp.empName = "Visva"
emp.empAddress = "Chennai"
console.log(emp.empName)

var emp2 = emp
emp2.empName = "Vinod"
console.log(emp2.empName)
console.log(emp.empName) */

let employee = function(id, name, address) {
    this.empId = id;
    this.empName = name;
    this.empAddress = address;

    this.display = function() {
        console.log("The name: " + this.empName)
        console.log("The id is : " + this.empId)
        console.log("The Address : " + this.empAddress)
    }
}


let emp1 = new employee(123, "Visva", "Chennai");
let emp2 = new employee(124, "Binod", "Mysore");
let emp3 = new employee(125, "Naams", "Banglore");

emp1.display();