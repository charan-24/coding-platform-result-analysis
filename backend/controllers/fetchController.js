const Batch = require('../models/BatchModel');
const { ScoreModel, scoreModel } = require('../models/ScoreModel');
const asyncHandler = require('express-async-handler');

const fetchScore = asyncHandler(async (req,res)=>{
    const {batchname,rollno,problems,contest,rating} = req.body;
    if(!batchname || !rollno){
        return res.status(400).json({message:"all fields required"});
    }

    const batch = await Batch.findOne({batchname}).exec();
    if(!batch){
        return res.status(400).json({message:"batch not found"});
    }

    const foundUser = batch.users.find(user => user.rollno === rollno);
    if(!foundUser){
        return res.status(400).json({message:"user not found"});
    }

    const newScores = scoreModel({
        contestRating: rating,
        noOfContests: contest,
        noOfProblemsSolved: problems
    });
    foundUser.profiles.hackerrank.scores = newScores;
    await batch.save();
    return res.status(200).json({success:"scores updated"});
});

module.exports = {
    fetchScore
}