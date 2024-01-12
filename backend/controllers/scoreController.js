// const axios = require('axios');
// const Batch = require('../models/BatchModel');
// const { scoreSchema, scoreModel } = require('../models/ScoreModel');
// const asyncHandler = require('express-async-handler');

// const fetchScore = asyncHandler(async (req,res)=>{
//     const {batchname} = req.body;
//     if(!batchname){
//         return res.status(400).json({message:`${batchname} not found`});
//     }
//     const batch = await Batch.findOne({batchname}).exec();
//     if(!batch){
//         return res.status(400).json({message:`${batchname} not found`});
//     }

//     const users = batch.users;
//     for(let i=0;i<users.length;i++){
//         hr = await axios.get('http://localhost:'+process.env.PORT+'/fetch/hr/'+users[i].profiles.hackerrank.username);
//         hr = hr.payload;
//         lc = await axios.get('http://localhost:'+process.env.PORT+'/fetch/lc/'+users[i].profiles.leetcode.username);
//         lc = lc.payload;
//         cc = await axios.get('http://localhost:'+process.env.PORT+'/fetch/cc/'+users[i].profiles.codechef.username);
//         cc = cc.payload;
//         cf = await axios.get('http://localhost:'+process.env.PORT+'/fetch/cf/'+users[i].profiles.codeforces.username);
//         cf = cf.payload;
//         ib = await axios.get('http://localhost:'+process.env.PORT+'/fetch/ib/'+users[i].profiles.interviewbit.username);
//         ib = ib.payload;
//         spoj = await axios.get('http://localhost:'+process.env.PORT+'/fetch/spoj/'+users[i].profiles.spoj.username);
//         spoj = spoj.payload;

//         const hrscore = scoreModel({
//             dsScore: hr.dsScore,
//             algoscore: hr.algoscore
//         });
//         const lcscore = scoreModel({
//             noOfProblemsSolved: lc.noOfProblemsSolved,
//             noOfContests: lc.noOfContests,
//             contestRating: lc.contestRating,
//         }); 
//         const ccscore = scoreModel({
//             noOfProblemsSolved: cc.noOfProblemsSolved,
//             noOfContests: cc.noOfContests,
//             contestRating: cc.contestRating,
//         }); 
//         const cfscore = scoreModel({
//             noOfProblemsSolved: cf.noOfProblemsSolved,
//             noOfContests: cf.noOfContests,
//             contestRating: cf.contestRating,
//         }); 
//         const ibscore = scoreModel({
//             noOfProblemsSolved: ib.noOfProblemsSolved,
//         }); 
//         const spojscore = scoreModel({
//             noOfProblemsSolved: spoj.noOfProblemsSolved,
//         });

//         users[i].profiles.hackerrank.scores = hrscore;
//         users[i].profiles.leetcode.scores = lcscore;
//         users[i].profiles.codechef.scores = ccscore;
//         users[i].profiles.codeforces.scores = cfscore;
//         users[i].profiles.interviewbit.scores = ibscore;
//         users[i].profiles.spoj.scores = spojscore;

//         await batch.save();
//         return res.status(200).json({success:"scores updated"});
//     }

// });

// module.exports = {
//     fetchScore
// }