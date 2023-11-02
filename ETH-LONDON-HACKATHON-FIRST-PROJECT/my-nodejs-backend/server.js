const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/checkEligibility', (req, res) => {
  res.send('Are you stromwise? (Yes/No)');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
