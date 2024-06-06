// Define the Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: any; // This allows adding any other properties
}

// Define the Directors interface extending Teacher
export interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the printTeacher function interface
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// Define the constructor interface for the StudentClass
export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

// Define the StudentClass interface
export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
export class StudentClass implements IStudentClass {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
}

// Function to create a student
export function createStudent(ctor: IStudentClassConstructor, firstName: string, lastName: string): IStudentClass {
  return new ctor(firstName, lastName);
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Testing other functionalities
const student = createStudent(StudentClass, 'Jane', 'Smith');
console.log(student.workOnHomework()); // "Currently working"
console.log(student.displayName()); // "Jane"
console.log(printTeacher('John', 'Doe')); // "J. Doe"
