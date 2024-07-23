console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (input) => {
  const name = input.trim();
  console.log(`Your name is: ${name}`);
  process.stdin.end();
});
process.on('exit', () => {
  console.log('This important software is now closing');
});
