require('dotenv').config();
const exp = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app=exp();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(exp.static("public"));

require('./db');

// app.get('/',(req,res)=>{
//     res.send("Hello,from server");
// });

app.post('/',(req,res)=>{
    const mail = req.body.mail;
    const pwd = req.body.password;
    console.log(mail);
    console.log(pwd);
    res.redirect('http://localhost:3000/my-profile');
});

app.post('/register',(req,res)=>{
    const mail = req.body.mail;
    const pwd = req.body.password;
    const cnfpwd = req.body.cnfpassword;
    console.log(mail);
    console.log(pwd);
    console.log(cnfpwd);
    res.redirect('http://localhost:3000/my-profile');
});

app.post('/coding-profiles',(req,res)=>{
    const hackeruname = req.body.hackeruname;
    const leetuname = req.body.leetuname;
    const chefuname = req.body.chefuname;
    const forceuname = req.body.forceuname;
    console.log("hacker: "+ hackeruname);
    console.log("leetcode: "+ leetuname);
    console.log("codechef: "+ chefuname);
    console.log("coedforces: "+ forceuname);
    res.redirect('http://localhost:3000/my-profile');
});

app.listen(5000,()=>{console.log("server started on port "+process.env.PORT)});