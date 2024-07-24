import { readDatabase } from '../utils.js';

export class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const dbFile = process.argv[2];
      const students = await readDatabase(dbFile);
      const sortedFields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      let response = 'This is the list of our students\n';
      for (const field of sortedFields) {
        const names = students[field].join(', ');
        response += `Number of students in ${field}: ${students[field].length}. List: ${names}\n`;
      }

      res.status(200).send(response.trim());
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const dbFile = process.argv[2];
      const students = await readDatabase(dbFile);

      if (!students[major]) {
        return res.status(500).send('Cannot load the database');
      }

      const names = students[major].join(', ');
      res.status(200).send(`List: ${names}`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}
