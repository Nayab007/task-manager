
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware

app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send('Task manager Ap');
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => 
    console.log(`Server is on port ${port}...`)
    );
  } catch (error) {
    console.log(error)
  }
}

start();
