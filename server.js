//@ts-check
const express = require('express');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const routes = require('./routes');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cookieParser());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/tripsy', { useNewUrlParser: true, useCreateIndex: true })

const server = app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

const io = socketIO(server);

app.set('io', io);

io.on('connect', socket => {
  console.log('successfully connected to socket')
})


