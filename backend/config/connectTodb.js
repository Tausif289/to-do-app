const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const password = process.env.MONGODB_PASSWORD

    const uri = `mongodb+srv://tausifansar84_db_user:${password}@devcluster.rpntc.mongodb.net/userdb?retryWrites=true&w=majority`

    const conn = await mongoose.connect(uri)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error('MongoDB connection failed ❌')
    console.error(error.message)
    process.exit(1)
  }
}

module.exports = connectDB