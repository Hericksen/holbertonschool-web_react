// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create student1 and student2
const student1: Student = {
  firstName: "Henri",
  lastName: "Mille",
  age: 30,
  location: "Neau",
};

const student2: Student = {
  firstName: "Guillaume",
  lastName: "Bouvier",
  age: 31,
  location: "Paris"
};

// Store them in an array
const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

// Add rows for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);