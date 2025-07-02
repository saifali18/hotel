let  mongoose = require('mongoose')
require('dotenv').config()

//Define the MongoDB connection URL
// const mongoURL ="mongodb://127.0.0.1:27017/hotel" //Replace 'hotel' with your database name 
// const mongoURL =process.env.MONGODB_URL_LOCAL
// const mongoURL = "mongodb+srv://saif01012004:1GFurlCqWnkCVUG6@hotelclus.cvvset7.mongodb.net/"
// const mongoURL = "mongodb+srv://saif8969696716:0Bkfxnbv3IUbwcyT@cluster0.yr8tteb.mongodb.net/"
const mongoURL = process.env.MONGODB_URL
// set up MongoDB connection

mongoose.connect(mongoURL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

//Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

// Define event listeners for database connection

db.on('connected',()=>{
  console.log('Connected to MongoDB server')
});

db.on('error',(err)=>{
  console.log('MongoDB Connections error',err)
})
db.on('disconnected',()=>{
  console.log('MongoDB disconnected ')
})

module.exports = db  //