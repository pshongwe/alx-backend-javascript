// Define the Student interface
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "Dick",
  lastName: "Cheney",
  age: 83,
  location: "Nebraska, United States of America",
};

const student2: Student = {
  firstName: "Ryan",
  lastName: "Reynolds",
  age: 47,
  location: "Vancouver, Canada",
};

// Create an array containing the student objects
const studentsList: Array<Student> = [student1, student2];

// Define the styles for the HTML elements
const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }

  td:nth-child(1) {
    text-align: center;
  }
`;

/**
 * Displays information about students in a table.
 * @param students The list of students to display.
 */
export const displayStudents = (students: Array<Student>): void => {
  // Create a table element
  const table = document.createElement('table');
  
  // Create the table header and append it to the table
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td>');
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
  tableHead.insertAdjacentElement('beforeend', headRow);

  // Create the table body and append the students' data
  const tableBody = document.createElement('tbody');
  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.insertAdjacentElement('beforeend', bodyRow);
  }

  // Append the table head and body to the table
  table.insertAdjacentElement('beforeend', tableHead);
  table.insertAdjacentElement('beforeend', tableBody);

  // Append the table to the document body
  document.body.insertAdjacentElement('beforeend', table);
};

// Call the displayStudents function to render the table
displayStudents(studentsList);

// Add the defined styles to the document
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);

// Set the document title
document.title = 'Task 0';
