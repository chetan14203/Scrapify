const connection = require('../connectDB'); 


const createUser = async (req, res) => {
    try {
        const { mobileNumber, name, address, pickupDate, pickupTime } = req.body;

        if (!mobileNumber || mobileNumber.trim() === "") {
            return res.status(400).json({ msg: "Mobile number is required." });
        }

        
        const query = `
            INSERT INTO User (mobileNumber, name, address, pickupDate, pickupTime)
            VALUES (?, ?, ?, ?, ?)
        `;

        connection.query(query, [mobileNumber, name, address, pickupDate, pickupTime], (err, results) => {
            if (err) {
                console.error("Error saving user details:", err);
                return res.status(500).json({ msg: "Internal server error. Details are not saved." });
            }

            
            res.status(200).json({ msg: "Details are saved.", userId: results.insertId });
        });
    } catch (err) {
        console.error("Error saving user details:", err);
        res.status(500).json({ msg: "Internal server error." });
    }
};


const userget = async (req, res) => {
    try {
       
        const query = 'SELECT * FROM User';
        connection.query(query, (err, results) => {
            if (err) {
                return res.status(500).json({ msg: "Internal server error." });
            }

            res.status(200).json(results); 
        });
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(404).json({ msg: "Error occurred." });
    }
};

module.exports = { createUser, userget };

