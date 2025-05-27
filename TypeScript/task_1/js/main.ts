// Define the Teacher interface
interface Teacher {
    firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows additional arbitrary properties
}

// Example usage
const teacher3: Teacher = {
  firstName: 'Guigui',
  fullTimeEmployee: false,
  lastName: 'Mimille',
  location: 'Laval',
  contract: false,
};

console.log(teacher3);