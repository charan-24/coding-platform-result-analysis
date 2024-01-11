const Batch = require('../models/BatchModel');
const asyncHandler = require('express-async-handler');

const changeAhandle = asyncHandler(async (req,res) => {
    const {batchname,rollno,handlename,handle} = req.body;
    if(!batchname || !rollno || !handlename || !handle){
        return res.status(400).json({message:"all fields required"});
    }
    const batch = await Batch.findOne({batchname}).exec();
    if(!batch){
        return res.status(400).json({message:`${batchname} not found`});
    }
    const foundUser = batch.users.find(user => user.rollno === rollno);
    if(!foundUser){
        return res.status(400).json({message:`user not found`});
    }
    if(handlename === "hackerrank"){
        foundUser.profiles.hackerrank.username = handle;
    }
    else if(handlename === "hackerrank"){
        foundUser.profiles.hackerrank.username = handle;
    }
    else if(handlename === "leetcode"){
        foundUser.profiles.leetcode.username = handle;
    }
    else if(handlename === "codechef"){
        foundUser.profiles.codechef.username = handle;
    }
    else if(handlename === "codeforces"){
        foundUser.profiles.codeforces.username = handle;
    }
    else if(handlename === "interviewbit"){
        foundUser.profiles.interviewbit.username = handle;
    }
    else if(handlename === "spoj"){
        foundUser.profiles.spoj.username = handle;
    }

    await batch.save();
    return res.status(200).json({message:`${handlename} updated`});
});

module.exports = {
    changeAhandle
}