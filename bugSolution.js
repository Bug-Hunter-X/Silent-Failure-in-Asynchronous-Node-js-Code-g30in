const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      const result = someExternalAPI();
      if (result) {
        res.send('Success!');
      } else {
        // Handle the error explicitly
        res.status(500).send('Error from API');
      }
    } catch (error) {
      console.error('Caught error:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 100);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someExternalAPI() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('API request failed');
  }
  return true;
} 