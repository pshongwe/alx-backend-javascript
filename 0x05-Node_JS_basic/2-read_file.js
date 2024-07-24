const fs = require('fs');

function countStudents(path) {
    if (!fs.existsSync(path)) {
      throw new Error('Cannot load the database');
    }
    if (!fs.statSync(path).isFile()) {
      throw new Error('Cannot load the database');
    }    
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fields = {};

    students.forEach(student => {
      const [firstName,,, field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
}

module.exports = countStudents;
