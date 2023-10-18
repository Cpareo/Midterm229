const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post('http://localhost:3000', function (req, res) {
  const { name, description, category, quantity, price } = req.body;



  console.log(`Name: ${name}`);
  console.log(`Description: ${description}`);
  console.log(`Category: ${category}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Price: ${price}`);

  res.json({ message: 'Form submitted successfully' });
});

app.listen(3000, function () {
  console.log('Server is listening on port 3000');
});
