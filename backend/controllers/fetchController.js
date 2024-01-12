const axios = require('axios');
const Batch = require('../models/BatchModel');
const { scoreSchema, scoreModel } = require('../models/ScoreModel');
const asyncHandler = require('express-async-handler');

const fetchScore = asyncHandler(async (req,res)=>{
    const {batchname} = req.body;
    if(!batchname){
        return res.status(400).json({message:`all fields are required`});
    }
    const batch = await Batch.findOne({batchname}).exec();
    if(!batch){
        return res.status(400).json({message:`${batchname} not found`});
    }

    const users = batch.users;
    for(let i=0;i<users.length;i++){
        if(users[i].profiles.hackerrank.username){
            hr = await axios.get('http://localhost:'+process.env.PORT+'/fetch/hr/'+users[i].profiles.hackerrank.username);
            hr = hr.data.payload;
            console.log(hr);
            
            const hrscore = scoreModel({
                dsScore: hr.ds_score,
                algoScore: hr.algo_score
            });
            users[i].profiles.hackerrank.scores = hrscore;
        }

        if(users[i].profiles.leetcode.username){
            lc = await axios.get('http://localhost:'+process.env.PORT+'/fetch/lc/'+users[i].profiles.leetcode.username);
            lc = lc.data.payload;
            console.log(lc);
            const lcscore = scoreModel({
                noOfProblemsSolved: lc.noOfProblemsSolved,
                noOfContests: lc.noOfContests,
                contestRating: lc.rating,
            }); 
            users[i].profiles.leetcode.scores = lcscore;
        }

        if(users[i].profiles.codechef.username){
            cc = await axios.get('http://localhost:'+process.env.PORT+'/fetch/cc/'+users[i].profiles.codechef.username);
            cc = cc.data.payload;
            console.log(cc);
            const ccscore = scoreModel({
                noOfProblemsSolved: cc.noOfProblemsSolved,
                noOfContests: cc.noOfContests,
                contestRating: cc.rating,
            });
            users[i].profiles.codechef.scores = ccscore;
        }

        if(users[i].profiles.codeforces.username){
            cf = await axios.get('http://localhost:'+process.env.PORT+'/fetch/cf/'+users[i].profiles.codeforces.username);
            cf = cf.data.payload;
            console.log(cf);
            const cfscore = scoreModel({
                noOfProblemsSolved: cf.noOfProblemsSolved,
                noOfContests: cf.noOfContests,
                contestRating: cf.rating,
            });
            users[i].profiles.codeforces.scores = cfscore;
        }

        if(users[i].profiles.interviewbit.username){
            ib = await axios.get('http://localhost:'+process.env.PORT+'/fetch/ib/'+users[i].profiles.interviewbit.username);
            ib = ib.data.payload;
            console.log(ib);
            const ibscore = scoreModel({
                noOfProblemsSolved: ib.noOfProblemsSolved,
            });
            users[i].profiles.interviewbit.scores = ibscore; 
        }

        if(users[i].profiles.spoj.username){
            spoj = await axios.get('http://localhost:'+process.env.PORT+'/fetch/spoj/'+users[i].profiles.spoj.username);
            spoj = spoj.data.payload;
            console.log(spoj);
            const spojscore = scoreModel({
                noOfProblemsSolved: spoj.noOfProblemsSolved,
            });
            users[i].profiles.spoj.scores = spojscore;
        }
    }
    await batch.save();
    return res.status(200).json({success:"scores updated"});

});

const fetchScoreIndividual = asyncHandler(async(req,res)=>{
    const {batchname,rollno} = req.body;
    if(!batchname || !rollno){
        return res.status(400).json({message:`all fields are required`});
    }
    const batch = await Batch.findOne({batchname}).exec();
    if(!batch){
        return res.status(400).json({message:`${batchname} not found`});
    }

    const user = batch.users.find(user => user.rollno === rollno);
        if(user.profiles.hackerrank.username){
            hr = await axios.get('http://localhost:'+process.env.PORT+'/fetch/hr/'+user.profiles.hackerrank.username);
            hr = hr.data.payload;
            console.log(hr);

            const hrscore = scoreModel({
                dsScore: hr.ds_score,
                algoScore: hr.algo_score
            });
            user.profiles.hackerrank.scores = hrscore;
        }

        if(user.profiles.leetcode.username){
            lc = await axios.get('http://localhost:'+process.env.PORT+'/fetch/lc/'+user.profiles.leetcode.username);
            lc = lc.data.payload;
            console.log(lc);
            const lcscore = scoreModel({
                noOfProblemsSolved: lc.noOfProblemsSolved,
                noOfContests: lc.noOfContests,
                contestRating: lc.rating,
            }); 
            user.profiles.leetcode.scores = lcscore;
        }

        if(user.profiles.codechef.username){
            cc = await axios.get('http://localhost:'+process.env.PORT+'/fetch/cc/'+user.profiles.codechef.username);
            cc = cc.data.payload;
            console.log(cc);
            const ccscore = scoreModel({
                noOfProblemsSolved: cc.noOfProblemsSolved,
                noOfContests: cc.noOfContests,
                contestRating: cc.rating,
            });
            user.profiles.codechef.scores = ccscore;
        }

        if(user.profiles.codeforces.username){
            cf = await axios.get('http://localhost:'+process.env.PORT+'/fetch/cf/'+user.profiles.codeforces.username);
            cf = cf.data.payload;
            console.log(cf);
            const cfscore = scoreModel({
                noOfProblemsSolved: cf.noOfProblemsSolved,
                noOfContests: cf.noOfContests,
                contestRating: cf.rating,
            });
            user.profiles.codeforces.scores = cfscore;
        }

        if(user.profiles.interviewbit.username){
            ib = await axios.get('http://localhost:'+process.env.PORT+'/fetch/ib/'+user.profiles.interviewbit.username);
            ib = ib.data.payload;
            console.log(ib);
            const ibscore = scoreModel({
                noOfProblemsSolved: ib.noOfProblemsSolved,
            });
            user.profiles.interviewbit.scores = ibscore; 
        }

        if(user.profiles.spoj.username){
            spoj = await axios.get('http://localhost:'+process.env.PORT+'/fetch/spoj/'+user.profiles.spoj.username);
            spoj = spoj.data.payload;
            console.log(spoj);
            const spojscore = scoreModel({
                noOfProblemsSolved: spoj.noOfProblemsSolved,
            });
            user.profiles.spoj.scores = spojscore;
        }

    await batch.save();
    return res.status(200).json({success:"scores updated"});
});

module.exports = {
    fetchScore,
    fetchScoreIndividual
}