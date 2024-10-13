const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port = 5000;
const userRoutes = require('./routes/user.js')
require('dotenv').config()
const cors = require('cors');
app.use(cors());
app.use(express.json());



app.use('/',userRoutes)

const uri = process.env.MONGODB_URI
console.log(uri);

const connectToDatabase = async () => {
    try {
        
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            ssl: true,  
            tlsAllowInvalidCertificates: false  
          };
          await mongoose.connect(uri, options);
        console.log('Successfully connected to MongoDB Atlas!');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};

connectToDatabase();




app.listen(port,() => {
    console.log(`Server is live at ${port}`)
})