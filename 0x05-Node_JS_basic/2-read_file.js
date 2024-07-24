const fs = require('fs');

function countStudents(dataPath) {
  if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(dataPath, 'utf-8').trim();
  if (data === '') {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n');
  const students = lines.slice(1).filter(line => line.trim() !== '');

  const studentGroups = {};
  students.forEach((student) => {
    const studentData = student.split(',');
    const field = studentData[studentData.length - 1];

    if (!studentGroups[field]) {
      studentGroups[field] = [];
    }
    studentGroups[field].push(studentData[0]);
  });

  console.log(`Number of students: ${students.length}`);
  for (const [field, names] of Object.entries(studentGroups)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;
