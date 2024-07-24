import fs from 'fs/promises';

/**
 * Reads the database asynchronously and returns a promise with an object of arrays of student names per field.
 * @param {String} filePath The path to the CSV data file.
 * @returns {Promise<Object>} The student data organized by field.
 */
export const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n');
    const studentGroups = {};

    for (const line of lines.slice(1)) {
      if (line.trim()) {
        const studentData = line.split(',');
        const field = studentData.pop();
        const name = studentData[0]; // Assumes first column is the name

        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }
        studentGroups[field].push(name);
      }
    }

    return studentGroups;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
