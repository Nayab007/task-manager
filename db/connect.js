const mongoose = require('mongoose')

const connectionString = 
'mongodb+srv://nayab:MAFpgJV21sZ8ELx2@nodeexpresspoject.qrurrdq.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'


const connectDB = (url) => {
    return mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }
  
  module.exports = connectDB