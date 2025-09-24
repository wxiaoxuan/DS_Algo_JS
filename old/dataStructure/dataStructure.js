// ====================================================================================
// DATA STRUCTURES
// ====================================================================================

// class: creates a constant
class Student {
  //To create new objects
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // Instance
  fullName() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }

  // Static Methods
  static enrollStudents(...students) {
    // send email here
  }
}

// Creating objects from classes => use 'new'
let firstStudent = new Student("Colt", "Wong");
let secondStudent = new Student("Mr", "Bean");

console.log(firstStudent); // Output: Student { firstName: 'Colt', lastName: 'Wong' }
console.log(firstStudent.fullName()); // Instance. Output: Hello Colt Wong



// List vs Arrays
