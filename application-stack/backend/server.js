const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Allow CORS for all origins (for dev/testing)

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
