const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;

/**
 * Reads the CSV file and returns the students report.
 * @param {String} dataPath The path to the CSV data file.
 * @returns {Promise<String>} The students report as a plain text.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const reportParts = [];
      const fileLines = data.trim().split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }
        const studentEntries = studentPropNames.map(
          (propName, idx) => [propName, studentPropValues[idx]],
        );
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }
      const totalStudents = Object.values(studentGroups)
        .reduce((total, group) => total + group.length, 0);
      reportParts.push(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        reportParts.push(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(reportParts.join('\n'));
    }
  });
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const dbFile = process.argv[2];
  countStudents(dbFile)
    .then((report) => {
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.send(`This is the list of our students\n${report}`);
    })
    .catch((err) => {
      res.setHeader('Content-Type', 'text/plain');
      res.status(500).send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

module.exports = app;
