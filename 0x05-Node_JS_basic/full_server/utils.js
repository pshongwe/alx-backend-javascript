const fs = require('fs').promises;

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter(line => line);
        const students = {};
        
        lines.slice(1).forEach(line => {
          const [firstname, , , field] = line.split(',');
          if (!students[field]) students[field] = [];
          students[field].push(firstname);
        });

        resolve(students);
      })
      .catch((error) => reject(new Error('Cannot load the database')));
  });
};

module.exports = readDatabase;
