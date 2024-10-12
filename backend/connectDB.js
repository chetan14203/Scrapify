const express = require('express');
const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/myDatabase";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB via Mongoose!");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

module.exports = connectToDatabase;
