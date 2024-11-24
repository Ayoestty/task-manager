const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Server } = require('http');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database Connection
mongoose.connect('mongodb://localhost/taskmaster', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Routes
Server.use('/api/users', require('./routes/users'));
Server.listen(port, ('3000') => console.log(`Server started on port ${port}`));
