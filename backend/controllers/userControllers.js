const express = require("express");
const User = require('../models/user');

const createUser = async (req, res) => {
    try {
        const { mobileNumber,name,address,pickupDate,pickupTime } = req.body; // Extract mobileNumber from request body

        // Validate the mobileNumber (ensure it's not null or empty)
        if (!mobileNumber || mobileNumber.trim() === "") {
            return res.status(400).json({ msg: "Mobile number is required." });
        }
        
        const user = new User({
            mobileNumber,name,address,pickupDate,pickupTime
        });

        // Save the user to the database
        await user.save();

        // Send success response
        res.status(200).json({ msg: "Details are saved." });
    } catch (err) {
        console.error("Error saving user details:", err);
        // Send error response
        res.status(500).json({ msg: "Internal server error. Details are not saved." });
    }
};


const userget = async (req,res) => {
    try {
        res.status(201).json("Hello");
    }catch(err){
        res.status(404).json(err);
    }
}

// Export the createUser function
module.exports = { createUser,userget };

