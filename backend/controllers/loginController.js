const User = require('../models/UserModel');
const bcrypt = require('bcrypt');

const handleLogin = async (req,res) => {
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(400).json({"message":"Username and password can't be empty"});
    }

    const foundUser = await User.findOne({ username }).exec();
    if(!foundUser){
        return res.status(401).json({"message":"No user found"});
    }

    const match = await bcrypt.compare(password, foundUser.password);
    if(match){
    //    return res.status(200).json({"message":"login success"}); 
        res.redirect('http://localhost:3000/my-profile');
    }
    else{
        return res.sendStatus(401);
    }
};

module.exports = { handleLogin };