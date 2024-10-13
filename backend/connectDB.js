// db.js

const mongoose = require('mongoose');

// Replace <username>, <password>, <dbname>, and <cluster-url> with your actual credentials
const uri = 'mongodb+srv://chetan:carmel@cluster0.86aav.mongodb.net/scrapify?retryWrites=true&w=majority&appName=Cluster0'

const connectToDatabase = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Successfully connected to MongoDB Atlas!');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};

module.exports = connectToDatabase;

