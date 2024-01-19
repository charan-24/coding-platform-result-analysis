const User = require('../models/UserModel');
const bcrypt = require('bcrypt');

const handleRegister = async (req,res) => {
    const {username, password} = req.body;
    if(!username || !password ){
        return res.status(400).json({"message":"Username and password can't be empty"});
    }

    const foundUser =  await User.userModel.findOne({ username:username }).exec();
    if(foundUser){
        return res.status(409).json({"message":"User already exists"});
    }
    try {
        //encrypt the password
        const hashedPwd =  await bcrypt.hash(password, 10);
        //create & store the new user
        const newUser =  await User.userModel.create({ 
                            "username": username, 
                            "password": hashedPwd 
                        });
        res.status(201).json({ 'success': `New user ${username} created!` });
        // res.redirect('http://localhost:3000/');
    } 
    catch (err) {
        res.status(500).json({ 'message': err.message });
    }
};

module.exports = { handleRegister };