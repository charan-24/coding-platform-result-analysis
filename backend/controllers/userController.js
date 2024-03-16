const Batch = require('../models/BatchModel');
const asyncHandler = require('express-async-handler');

const changeAhandle = asyncHandler(async (req,res) => {
    const {rollno,handlename,handle} = req.body;
    console.log(rollno + handlename + handle);
    if(!rollno || !handlename || !handle){
        return res.status(400).json({message:"all fields required"});
    }
    
    const batch = await Batch.find().exec();
    if(!batch){
        return res.status(400).json({message:`no batches found`});
    }
    for(let i=0;i<batch.length;i++){
        const foundUser = batch[i].users.find(user => user.rollno === rollno);
        if(!foundUser){
            // return res.status(400).json({message:`user not found`});
            continue;
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
        await batch[i].save();
    }
    return res.status(200).json({message:`${handlename} handle updated`});
});

const fetchUserDetails = asyncHandler(async(req,res)=>{
    const rollno = req.params.rollno;
    // console.log(rollno);
    if(!rollno){
        return res.status(400).json({message:"rollno required"});
    }
    const batches = await Batch.find().exec();
    if(!batches){
        return res.status(400).json({message:"no batches"});
    }

    for(let i=0;i<batches.length;i++){
        const batch = batches[i];
        const foundUser = batch.users.find(user => user.rollno === rollno);
        if(!foundUser){
            continue;
        } 
        const resObj = {};
        resObj["fullname"] = foundUser.fullname;
        resObj["email"] = foundUser.email;
        resObj["rollno"] = foundUser.rollno;
        resObj["hackerrank"] = foundUser.profiles.hackerrank.username;
        resObj["leetcode"] = foundUser.profiles.leetcode.username
        resObj["codeforces"] = foundUser.profiles.codeforces.username
        resObj["codechef"] = foundUser.profiles.codechef.username
        resObj["spoj"] = foundUser.profiles.spoj.username
        resObj["interviewbit"] = foundUser.profiles.interviewbit.username;
        return res.status(200).json(resObj);
    }

});



module.exports = {
    changeAhandle,
    fetchUserDetails
}