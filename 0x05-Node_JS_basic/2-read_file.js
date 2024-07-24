const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileContent = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');

  const studentData = {};
  const headers = fileContent[0].split(',');
  const studentAttributes = headers.slice(0, headers.length - 1);

  for (const record of fileContent.slice(1)) {
    const details = record.split(',');
    const attributes = details.slice(0, details.length - 1);
    const field = details[details.length - 1];
    if (!Object.keys(studentData).includes(field)) {
      studentData[field] = [];
    }
    const studentInfo = studentAttributes
      .map((attribute, index) => [attribute, attributes[index]]);
    studentData[field].push(Object.fromEntries(studentInfo));
  }

  const numberOfStudents = Object
    .values(studentData)
    .reduce((prev, current) => (prev || []).length + current.length);

  console.log(`Number of students: ${numberOfStudents}`);

  for (const [field, students] of Object.entries(studentData)) {
    const names = students.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${students.length}. List: ${names}`);
  }
};

module.exports = countStudents;
