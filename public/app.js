const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// next 

app.post('/register', (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    
    // Perform validation checks
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).send('All fields are required.');
    }
    
    if (password !== confirmPassword) {
      return res.status(400).send('Passwords do not match.');
    }
    
    // Save the user to the database (MongoDB) or perform any desired actions
    
    // Redirect the user to a success page or display a success message
    res.render('success');
  });

  // next 
  
  const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Open the server-side file responsible for handling routes. For example, if you are using Node.js with Express, open the file where your routes are defined (e.g., app.js or a separate routes file).


app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Implement your authentication logic here
  // For example, check if the provided credentials are valid
  
  if (validCredentials) {
    // Redirect the user to the dashboard or desired page upon successful login
    res.redirect('/dashboard');
  } else {
    // Render the login form with an error message if the credentials are invalid
    res.render('login', { error: 'Invalid email or password' });
  }
});

