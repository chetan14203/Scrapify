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

const uri = "mongodb+srv://choudharyc355:carmel@cluster0.zhf8t.mongodb.net/scrapify?retryWrites=true&w=majority&appName=Cluster0";
console.log(uri);

const connectToDatabase = async () => {
    try {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        await mongoose.connect(uri, options);
        console.log('Successfully connected to MongoDB!');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};

connectToDatabase();

app.listen(port,() => {
    console.log(`Server is live at ${port}`)
})