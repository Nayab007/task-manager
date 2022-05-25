const express = require('express');
const app = express();
const routes = require('./routes/tasks')

app.get('/hello', (req, res) => {
    res.send('Task manager App')
})

const port = 3000

app.listen(port, console.log(`Server is on port ${port}...`))