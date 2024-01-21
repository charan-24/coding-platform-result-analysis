const Batch = require('../models/BatchModel');
const {userModel} = require('../models/UserModel');
const bcrypt = require('bcrypt');

const handleLogin = async (req,res) => {
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(400).json({"message":"Username and password can't be empty"});
    }
    const batch = await Batch.find({}).exec();
    // console.log(batch);
    for(let i=0;i<batch.length;i++){
        const users = batch[i].users;
        // console.log(users.length);
        const foundUser = users.find(user => user.rollno === username);
        if(!foundUser){
            return res.status(401).json({"message":"No user found"});
        }
        const match = await bcrypt.compare(password, foundUser.password);
        if(match){
            return res.status(200).json({"message":"login success"}); 
            // res.redirect('http://localhost:3000/my-profile');
        }      
    }
    return res.sendStatus(401);
};

module.exports = { handleLogin };