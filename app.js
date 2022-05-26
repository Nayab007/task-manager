
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')

// middleware

app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send('Task manager App');
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

const 

app.listen(port, console.log(`Server is on port ${port}...`));
