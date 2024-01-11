const Batch = require('../models/BatchModel');
const {userModel} = require('../models/UserModel');
const {profileModel} = require('../models/ProfileModel')
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler')


//add a newBatch
const addANewBatch = asyncHandler(async (req,res) => {
    const {batchname,users} = req.body;

    if(!batchname){
        return res.status(400).json({message:"batchname required"});
    }
    if(!Array.isArray(users) || users.length===0){
        return res.status(400).json({message:"users data required"});
    }

    const duplicate = await Batch.findOne({batchname}).exec();
    if(duplicate){
        return res.status(400).json({message:`${batchname} already exists`});
    }
    const batch = new Batch({
        batchname
    });

    for(let i=0;i<users.length;i++){
        const profile = new profileModel({
            hackerrank: {
                username: users[i].hackerrank
            }, 
            leetcode: {
                username: users[i].leetcode
            },
            codechef: {
                username: users[i].codechef
            },
            codeforces: {
                username: users[i].codeforces
            },
            interviewbit: {
                username: users[i].interviewbit
            },
            spoj: {
                username: users[i].spoj
            }
        })
        users[i].password = await bcrypt.hash(users[i].password,11);
        const newUser = new userModel({
            fullname: users[i].fullname,
            rollno: users[i].rollno,
            email: users[i].email,
            password: users[i].password,
            profiles: profile
        });
        batch.users.push(newUser);
    }
    await batch.save();
    res.status(200).json({success:`${batchname} added`});
});

//delete a Batch
const deleteABatch = asyncHandler(async (req,res) => {
    const {batchname} = req.body;
    if(!batchname){
        return res.status(400).json({message:"batchname required"});
    }

    const batch = await Batch.findOne({batchname}).exec();
    if(!batch){
        return res.status(204).json({message:`${batchname} not found`});
    }

    await Batch.deleteOne({batchname});
    return res.status(200).json({message:`${batchname} deleted`});
   
});

//add Users
const addUsers = asyncHandler(async (req,res)=>{
    const {batchname,users} = req.body;

    if(!batchname){
        return res.status(400).json({message:"batchname required"});
    }
    if(!Array.isArray(users) || users.length===0){
        return res.status(400).json({message:"users data required"});
    }

    const batch = await Batch.findOne({batchname}).exec();
    if(!batch){
        return res.status(400).json({message:`${batchname} not found`});
    }

    for(let i=0;i<users.length;i++){
        const duplicate = batch.users.find(user => user.rollno === users[i].rollno);
        if(duplicate){
            continue;
        }
        const profile = new profileModel({
            hackerrank: {
                username: users[i].hackerrank
            }, 
            leetcode: {
                username: users[i].leetcode
            },
            codechef: {
                username: users[i].codechef
            },
            codeforces: {
                username: users[i].codeforces
            },
            interviewbit: {
                username: users[i].interviewbit
            },
            spoj: {
                username: users[i].spoj
            }
        })
        users[i].password = await bcrypt.hash(users[i].password,11);
        const newUser = new userModel({
            fullname: users[i].fullname,
            rollno: users[i].rollno,
            email: users[i].email,
            password: users[i].password,
            profiles: profile
        });
        batch.users.push(newUser);
    }
    await batch.save();
    res.status(200).json({success:`users added`});
});

//delete a User
const deleteAUser = asyncHandler(async (req,res) => {
    const {batchname,rollno} = req.body;
    if(!batchname || !rollno){
        return res.status(400).json({message:"all fields required"});
    }

    const batch = await Batch.findOne({batchname}).exec();
    if(!batch){
        return res.status(400).json({message:`${batchname} not found`});
    }

    const foundUser = batch.users.find(user => user.rollno === rollno);
    if(!foundUser){
        console.log("user not found");
        return res.status(204).json({message:`${rollno} not found`});
    }

    const otherUsers = batch.users.filter(user => user.rollno !== rollno);
    console.log(otherUsers);
    batch.users.splice(0,batch.users.length);
    batch.users = otherUsers;
    await batch.save();

    return res.status(200).json({success:`${rollno} deleted`});
});

module.exports = { addANewBatch,
                   deleteABatch,
                   addUsers,
                   deleteAUser 
                };