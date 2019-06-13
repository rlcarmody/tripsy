const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cookieParser);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Send every request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/tripsy')

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
