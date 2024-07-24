const http = require('http');
const fs = require('fs');

const SERVER_PORT = 1245;
const SERVER_HOST = 'localhost';
const app = http.createServer();
const DATABASE_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const outputParts = [];
        const lines = data.toString('utf-8').trim().split('\n');
        const studentsByField = {};
        const fieldNames = lines[0].split(',');
        const studentFields = fieldNames.slice(
          0,
          fieldNames.length - 1
        );

        for (const line of lines.slice(1)) {
          const student = line.split(',');
          const studentValues = student.slice(
            0,
            student.length - 1
          );
          const field = student[student.length - 1];
          if (!Object.keys(studentsByField).includes(field)) {
            studentsByField[field] = [];
          }
          const studentEntries = studentFields.map((field, index) => [
            field,
            studentValues[index]
          ]);
          studentsByField[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(studentsByField).reduce(
          (prev, curr) => (prev || []).length + curr.length
        );
        outputParts.push(`Number of students: ${totalStudents}`);
        for (const [field, students] of Object.entries(studentsByField)) {
          outputParts.push([
            `Number of students in ${field}: ${students.length}.`,
            'List:',
            students.map((student) => student.firstname).join(', ')
          ].join(' '));
        }
        resolve(outputParts.join('\n'));
      }
    });
  }
});

const ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const message = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', message.length);
      res.statusCode = 200;
      res.write(Buffer.from(message));
    }
  },
  {
    route: '/students',
    handler(_, res) {
      const responseLines = ['This is the list of our students'];

      countStudents(DATABASE_FILE)
        .then((report) => {
          responseLines.push(report);
          const message = responseLines.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', message.length);
          res.statusCode = 200;
          res.write(Buffer.from(message));
        })
        .catch((err) => {
          responseLines.push(err instanceof Error ? err.message : err.toString());
          const message = responseLines.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', message.length);
          res.statusCode = 200;
          res.write(Buffer.from(message));
        });
    }
  }
];

app.on('request', (req, res) => {
  for (const routeHandler of ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(SERVER_PORT, SERVER_HOST, () => {
  process.stdout.write(`Server listening at -> http://${SERVER_HOST}:${SERVER_PORT}\n`);
});

module.exports = app;
