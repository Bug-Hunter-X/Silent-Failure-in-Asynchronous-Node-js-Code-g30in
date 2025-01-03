const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    // Example of an error that might be silently swallowed
    const result = someExternalAPI();
    if (result) {
      res.send('Success!');
    } else {
      // Error is not explicitly handled, it silently fails
      console.error('Error from API:', result);
    }
  }, 100);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someExternalAPI() {
  // Simulate an API call that may or may not throw an error
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('API request failed');
  }
  return true;
}