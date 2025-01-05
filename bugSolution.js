const express = require('express');
const app = express();
app.use(express.json()); // Properly configured middleware
app.post('/data', (req, res) => {
  console.log(req.body); // Now req.body will contain the parsed JSON
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));