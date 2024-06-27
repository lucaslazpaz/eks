const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('Hello EKS!');
});

app.listen(PORT, () => {
  console.log(`Server running on EKS!`);
});