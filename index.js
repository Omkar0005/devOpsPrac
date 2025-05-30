const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hello from Jenkins CI/CD!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

module.exports = app;
