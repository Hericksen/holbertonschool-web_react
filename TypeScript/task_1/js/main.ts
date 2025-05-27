// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows additional arbitrary properties
}
interface Directors extends Teacher {
  numberOfReports: number;
}
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Create a Teacher object
const teacher1: Teacher = {
  firstName: 'Guigui',
  fullTimeEmployee: false,
  lastName: 'Mimille',
  location: 'Laval',
  contract: false,
};
const director1: Directors = {
  firstName: 'Louiza',
  lastName: 'Houaouti',
  location: 'Laval',
  fullTimeEmployee: true,
  numberOfReports: 20,
};
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};


class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
const student = new StudentClass("Kevin", "Martin De Castro");
console.log(teacher1);
console.log(director1);
console.log(printTeacher("Guigui", "Mimille")); // Output: G. Mimille
console.log(student.displayName());
console.log(student.workOnHomework());