const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const userRoutes = require('./routes/user.js')
const cors = require('cors');
app.use(cors());
app.use(express.json());



app.use('/',userRoutes)

const uri = 'mongodb+srv://chetan:carmel@cluster0.86aav.mongodb.net/scrapify?retryWrites=true&w=majority&appName=Cluster0';


const connectToDatabase = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Successfully connected to MongoDB Atlas!');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};

connectToDatabase();



app.listen(port,() => {
    console.log(`Server is live at ${port}`)
})