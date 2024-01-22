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

    const users = batch.users.filter(user => user.role !== "Admin");
    for(let i=0;i<users.length;i++){
        //fetch from hackerrank
        hr = await axios.get('http://localhost:'+process.env.PORT+'/fetch/hr/'+users[i].profiles.hackerrank.username);
        hr = hr.data.payload;
        if(!hr.ds_score){
            hr.ds_score=0;
        }
        if(!hr.algo_score){
            hr.algo_score=0;
        }
        console.log(hr);
        const hrscore = scoreModel({
            dsScore: hr.ds_score,
            algoScore: hr.algo_score
        });
        users[i].profiles.hackerrank.scores = hrscore;
        

        //fetch from leetcode
        lc = await axios.get('http://localhost:'+process.env.PORT+'/fetch/lc/'+users[i].profiles.leetcode.username);
        lc = lc.data.payload;
        if(!lc.noOfProblemsSolved){
            lc.noOfProblemsSolved = 0;
        }
        if(!lc.noOfContests){
            lc.noOfContests = 0;
        }
        if(!lc.rating){
            lc.rating = 0;
        }
        console.log(lc);
        const lcscore = scoreModel({
            noOfProblemsSolved: lc.noOfProblemsSolved,
            noOfContests: lc.noOfContests,
            contestRating: lc.rating,
        }); 
        users[i].profiles.leetcode.scores = lcscore;
        

        //fetch from codechef
        cc = await axios.get('http://localhost:'+process.env.PORT+'/fetch/cc/'+users[i].profiles.codechef.username);
        cc = cc.data.payload;
        if(!cc.noOfProblemsSolved){
            cc.noOfProblemsSolved = 0;
        }
        if(!cc.noOfContests){
            cc.noOfContests = 0;
        }
        if(!cc.rating){
            cc.rating = 0;
        }
        console.log(cc);
        const ccscore = scoreModel({
            noOfProblemsSolved: cc.noOfProblemsSolved,
            noOfContests: cc.noOfContests,
            contestRating: cc.rating,
        });
        users[i].profiles.codechef.scores = ccscore;
        

        //fetch from codeforces
        cf = await axios.get('http://localhost:'+process.env.PORT+'/fetch/cf/'+users[i].profiles.codeforces.username);
        cf = cf.data.payload;
        if(!cf.noOfProblemsSolved){
            cf.noOfProblemsSolved = 0;
        }
        if(!cf.noOfContests){
            cf.noOfContests = 0;
        }
        if(!cf.rating){
            cf.rating = 0;
        }
        console.log(cf);
        const cfscore = scoreModel({
            noOfProblemsSolved: cf.noOfProblemsSolved,
            noOfContests: cf.noOfContests,
            contestRating: cf.rating,
        });
        users[i].profiles.codeforces.scores = cfscore;
        

        //fetch from interviewbit
        
        ib = await axios.get('http://localhost:'+process.env.PORT+'/fetch/ib/'+users[i].profiles.interviewbit.username);
        ib = ib.data.payload;
        if(!ib.noOfProblemsSolved){
            ib.noOfProblemsSolved = 0;
        }
        console.log(ib);
        const ibscore = scoreModel({
            noOfProblemsSolved: ib.noOfProblemsSolved,
        });
        users[i].profiles.interviewbit.scores = ibscore;
        

        //fetch from spoj     
        spoj = await axios.get('http://localhost:'+process.env.PORT+'/fetch/spoj/'+users[i].profiles.spoj.username);
        spoj = spoj.data.payload;
        if(!spoj.noOfProblemsSolved){
            spoj.noOfProblemsSolved = 0;
        }
        console.log(spoj);
        const spojscore = scoreModel({
            noOfProblemsSolved: spoj.noOfProblemsSolved,
        });
        users[i].profiles.spoj.scores = spojscore;
    }

    //save to db
    await batch.save();
    return res.status(200).json({success:"scores updated"});
});

const fetchNewUserScore = asyncHandler(async (req,res)=>{
    let {batchname,users} = req.body;
    if(!batchname){
        return res.status(400).json({message:`all fields are required`});
    }
    const batch = await Batch.findOne({batchname}).exec();
    if(!batch){
        return res.status(400).json({message:`${batchname} not found`});
    }
    
    let currusers = [];
    for(let i=0;i<users.length;i++){
        let temp = batch.users.filter(user => parseInt(user.rollno) === parseInt(users[i].rollno) && users[i].role !== 'Admin');
        if(temp.length>0)
            currusers.push(temp[0]);
    }
    console.log(currusers);
    for(let i=0;i<currusers.length;i++){
        //fetch from hackerrank
        console.log(currusers[i].profiles);
        hr = await axios.get('http://localhost:'+process.env.PORT+'/fetch/hr/'+currusers[i].profiles.hackerrank.username);
        hr = hr.data.payload;
        if(!hr.ds_score){
            hr.ds_score=0;
        }
        if(!hr.algo_score){
            hr.algo_score=0;
        }
        console.log(hr);
        const hrscore = scoreModel({
            dsScore: hr.ds_score,
            algoScore: hr.algo_score
        });
        currusers[i].profiles.hackerrank.scores = hrscore;
        

        //fetch from leetcode
        lc = await axios.get('http://localhost:'+process.env.PORT+'/fetch/lc/'+currusers[i].profiles.leetcode.username);
        lc = lc.data.payload;
        if(!lc.noOfProblemsSolved){
            lc.noOfProblemsSolved = 0;
        }
        if(!lc.noOfContests){
            lc.noOfContests = 0;
        }
        if(!lc.rating){
            lc.rating = 0;
        }
        console.log(lc);
        const lcscore = scoreModel({
            noOfProblemsSolved: lc.noOfProblemsSolved,
            noOfContests: lc.noOfContests,
            contestRating: lc.rating,
        }); 
        currusers[i].profiles.leetcode.scores = lcscore;
        

        //fetch from codechef
        cc = await axios.get('http://localhost:'+process.env.PORT+'/fetch/cc/'+currusers[i].profiles.codechef.username);
        cc = cc.data.payload;
        if(!cc.noOfProblemsSolved){
            cc.noOfProblemsSolved = 0;
        }
        if(!cc.noOfContests){
            cc.noOfContests = 0;
        }
        if(!cc.rating){
            cc.rating = 0;
        }
        console.log(cc);
        const ccscore = scoreModel({
            noOfProblemsSolved: cc.noOfProblemsSolved,
            noOfContests: cc.noOfContests,
            contestRating: cc.rating,
        });
        currusers[i].profiles.codechef.scores = ccscore;
        

        //fetch from codeforces
        cf = await axios.get('http://localhost:'+process.env.PORT+'/fetch/cf/'+currusers[i].profiles.codeforces.username);
        cf = cf.data.payload;
        if(!cf.noOfProblemsSolved){
            cf.noOfProblemsSolved = 0;
        }
        if(!cf.noOfContests){
            cf.noOfContests = 0;
        }
        if(!cf.rating){
            cf.rating = 0;
        }
        console.log(cf);
        const cfscore = scoreModel({
            noOfProblemsSolved: cf.noOfProblemsSolved,
            noOfContests: cf.noOfContests,
            contestRating: cf.rating,
        });
        currusers[i].profiles.codeforces.scores = cfscore;
        

        //fetch from interviewbit
        
        ib = await axios.get('http://localhost:'+process.env.PORT+'/fetch/ib/'+currusers[i].profiles.interviewbit.username);
        ib = ib.data.payload;
        if(!ib.noOfProblemsSolved){
            ib.noOfProblemsSolved = 0;
        }
        console.log(ib);
        const ibscore = scoreModel({
            noOfProblemsSolved: ib.noOfProblemsSolved,
        });
        currusers[i].profiles.interviewbit.scores = ibscore;
        

        //fetch from spoj     
        spoj = await axios.get('http://localhost:'+process.env.PORT+'/fetch/spoj/'+currusers[i].profiles.spoj.username);
        spoj = spoj.data.payload;
        if(!spoj.noOfProblemsSolved){
            spoj.noOfProblemsSolved = 0;
        }
        console.log(spoj);
        const spojscore = scoreModel({
            noOfProblemsSolved: spoj.noOfProblemsSolved,
        });
        currusers[i].profiles.spoj.scores = spojscore;
    }
    //save to db
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

    //fetch from hackerrank
    hr = await axios.get('http://localhost:'+process.env.PORT+'/fetch/hr/'+user.profiles.hackerrank.username);
    hr = hr.data.payload;
    console.log(hr);
    if(!hr.ds_score){
        hr.ds_score=0;
    }
    if(!hr.algo_score){
        hr.algo_score=0;
    }
    const hrscore = scoreModel({
        dsScore: hr.ds_score,
        algoScore: hr.algo_score
    });
    user.profiles.hackerrank.scores = hrscore;

    //fetch from leetcode
    lc = await axios.get('http://localhost:'+process.env.PORT+'/fetch/lc/'+user.profiles.leetcode.username);
    lc = lc.data.payload;
    if(!lc.noOfProblemsSolved){
        lc.noOfProblemsSolved = 0;
    }
    if(!lc.noOfContests){
        lc.noOfContests = 0;
    }
    if(!lc.contestRating){
        lc.contestRating = 0;
    }
    console.log(lc);
    const lcscore = scoreModel({
        noOfProblemsSolved: lc.noOfProblemsSolved,
        noOfContests: lc.noOfContests,
        contestRating: lc.rating,
    }); 
    user.profiles.leetcode.scores = lcscore;

    //fetch from codechef
    cc = await axios.get('http://localhost:'+process.env.PORT+'/fetch/cc/'+user.profiles.codechef.username);
    cc = cc.data.payload;
    if(!cc.noOfProblemsSolved){
        cc.noOfProblemsSolved = 0;
    }
    if(!cc.noOfContests){
        cc.noOfContests = 0;
    }
    if(!cc.contestRating){
        cc.contestRating = 0;
    }
    console.log(cc);
    const ccscore = scoreModel({
        noOfProblemsSolved: cc.noOfProblemsSolved,
        noOfContests: cc.noOfContests,
        contestRating: cc.rating,
    });
    user.profiles.codechef.scores = ccscore;

    //fetch from codeforces
    cf = await axios.get('http://localhost:'+process.env.PORT+'/fetch/cf/'+user.profiles.codeforces.username);
    cf = cf.data.payload;
    if(!cf.noOfProblemsSolved){
        cf.noOfProblemsSolved = 0;
    }
    if(!cf.noOfContests){
        cf.noOfContests = 0;
    }
    if(!cf.contestRating){
        cf.contestRating = 0;
    }
    console.log(cf);
    const cfscore = scoreModel({
        noOfProblemsSolved: cf.noOfProblemsSolved,
        noOfContests: cf.noOfContests,
        contestRating: cf.rating,
    });
    user.profiles.codeforces.scores = cfscore;

    //fetch from interviewbit
    ib = await axios.get('http://localhost:'+process.env.PORT+'/fetch/ib/'+user.profiles.interviewbit.username);
    ib = ib.data.payload;
    if(!ib.noOfProblemsSolved){
        ib.noOfProblemsSolved = 0;
    }
    console.log(ib);
    const ibscore = scoreModel({
        noOfProblemsSolved: ib.noOfProblemsSolved,
    });
    user.profiles.interviewbit.scores = ibscore; 

    //fetch from spoj
    spoj = await axios.get('http://localhost:'+process.env.PORT+'/fetch/spoj/'+user.profiles.spoj.username);
    spoj = spoj.data.payload;
    if(!spoj.noOfProblemsSolved){
        spoj.noOfProblemsSolved = 0;
    }
    console.log(spoj);
    const spojscore = scoreModel({
        noOfProblemsSolved: spoj.noOfProblemsSolved,
    });
    user.profiles.spoj.scores = spojscore;

    //save to db
    await batch.save();
    return res.status(200).json({success:"scores updated"});
});

const getScores = asyncHandler(async (req,res)=>{
    const batchname = req.params.batchname;
    if(!batchname){
        return res.status(400).json({message:"batchname required"});
    }
    const batch = await Batch.findOne({batchname}).exec();
    if(!batch){
        return res.status(400).json({message:`${batchname} not found`});
    }
    const users = batch.users.filter(user => user.role !== "Admin");
    if(!Array.isArray(users) || users.length===0){
        return res.status(400).json({message:"users required"});
    }

    const scoresData = [];
    for(let i=0;i<users.length;i++){
        let user = users[i];
        console.log(user);
        const resObj = {};
        // console.log(user);
        resObj["fullname"] = user.fullname;
        resObj["rollno"] = user.rollno;
        resObj["total"] = 0;
        user=user.profiles;
        // console.log(user);
        const hrscore = (user.hackerrank.scores.dsScore + user.hackerrank.scores.algoScore) || 0;
        resObj["hacker"] = hrscore;
        resObj["total"] += hrscore;
        user.hackerrank.scores.total = Math.ceil(hrscore);

        const spojscore = user.spoj.scores.noOfProblemsSolved * 20 || 0;
        resObj["spoj"] = spojscore;
        resObj["total"] += spojscore;
        user.spoj.scores.total = Math.ceil(spojscore);

        const ibscore = user.interviewbit.scores.noOfProblemsSolved / 3 || 0;
        resObj["interviewbit"] = Math.ceil(ibscore);
        resObj["total"] += resObj["interviewbit"];
        user.interviewbit.scores.total = Math.ceil(ibscore);

        let lcscore = user.leetcode.scores.noOfProblemsSolved * 50 || 0;
        if(user.leetcode.scores.noOfContests>3 && user.leetcode.scores.contestRating>1300){
            lcscore += ((user.leetcode.scores.contestRating-1300)*(user.leetcode.scores.contestRating-1300))/30;
        }
        resObj["leet"] = Math.ceil(lcscore);
        resObj["total"] += resObj["leet"];
        user.leetcode.scores.total = Math.ceil(lcscore);

        let ccscore = user.codechef.scores.noOfProblemsSolved * 10 || 0;
        if(user.codechef.scores.noOfContests>3 && user.codechef.scores.contestRating>1300){
            ccscore += ((user.codechef.scores.contestRating-1300)*(user.codechef.scores.contestRating-1300))/30;
        }
        resObj["chef"] = Math.ceil(ccscore);
        resObj["total"] += resObj["chef"];
        user.codechef.scores.total = Math.ceil(ccscore);

        let cfscore = user.codeforces.scores.noOfProblemsSolved * 10 || 0;
        if(user.codeforces.scores.noOfContests>3 && user.codeforces.scores.contestRating>1200){
            cfscore += ((user.codeforces.scores.contestRating-1200)*(user.codeforces.scores.contestRating-1200))/30;
        }
        resObj["forces"] = Math.ceil(cfscore);
        resObj["total"] += resObj["forces"];
        user.codeforces.scores.total = Math.ceil(cfscore);
        users[i].total = resObj["total"];
        scoresData.push(resObj);
    }
    await batch.save();
    return  res.status(200).json(scoresData);
});

const getIndScore = asyncHandler(async (req,res)=>{
    const rollno = req.params.rollno;
    if(!rollno){
        return res.status(400).json({message:"rollno required"});
    }
    const batch = await Batch.find({}).exec();
    for(let i=0;i<batch.length;i++){
        const users = batch[i].users.filter(user => user.role !== "Admin");;
        const foundUser = users.find(user => user.rollno === rollno);
        if(foundUser){
            const resObj = {}
            resObj["fullname"] = foundUser.fullname;
            resObj["rollno"] = foundUser.rollno;
            resObj["total"] = foundUser.total;  
            const scoreObj = {
                hackerrank:foundUser.profiles.hackerrank.scores.total,
                leetcode:foundUser.profiles.leetcode.scores.total,
                codechef:foundUser.profiles.codechef.scores.total,
                codeforces:foundUser.profiles.codeforces.scores.total,
                spoj:foundUser.profiles.spoj.scores.total,
                interviewbit:foundUser.profiles.interviewbit.scores.total,
            }
            resObj["scoreObj"] = scoreObj;
           return res.status(200).json(resObj); 
        }
    }
    return res.status(400).json({message:`${rollno} not found`});
});

module.exports = {
    fetchScore,
    fetchScoreIndividual,
    fetchNewUserScore,
    getScores,
    getIndScore
}

// "<!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="utf-8">
// <title>Error</title>
// </head>
// <body>
// <pre>TypeError: undefined is not a function<br> &nbsp; &nbsp;at Array.filter (&lt;anonymous&gt;)<br> &nbsp; &nbsp;at Proxy.methods.&lt;computed&gt; (D:\coding-platform-result-analysis\backend\node_modules\mongoose\lib\types\array\methods\index.js:1025:24)<br> &nbsp; &nbsp;at D:\coding-platform-result-analysis\backend\controllers\fetchController.js:142:31<br> &nbsp; &nbsp;at processTicksAndRejections (node:internal/process/task_queues:96:5)</pre>
// </body>
// </html>
// "