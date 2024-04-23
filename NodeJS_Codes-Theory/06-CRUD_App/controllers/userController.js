const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.signUp = async(req, res) => {
    const {username, password} = req.body;
    try {
        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({
            username,
            password : hashPassword
        });
        res.status(201).json({
            status : "new user added",
            data : {
                user : newUser
            }
        })
    } catch(err) {
        res.status(400).json({
            status : "failed to register user"
        })
    }
}