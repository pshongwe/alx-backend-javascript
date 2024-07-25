const express = require('express');
const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

function startServer(port = PORT) {
  return app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
  });
}

module.exports = { app, startServer };
