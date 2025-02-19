const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  try {
    const user = req.body;
    if (!user) {
      return res.status(400).json({ error: 'Missing user data' });
    }
    //Further validation can be added here
    console.log(user); 
    res.status(201).send();
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(400).json({ error: 'Invalid JSON request body' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));