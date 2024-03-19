//import modules
require('dotenv').config();
const exp = require('express');
const app = exp();
const bodyParser = require("body-parser");
const cors = require('cors');
const connectDB = require('./config/dbConn');
const mongoose = require('mongoose');
const fetchapp=require('./routes/fetch')
const cookieParser = require('cookie-parser');
const cron = require('node-cron');
const Batch = require('./models/BatchModel');
const axios = require('axios');
const emailjs = require('@emailjs/browser');
const PORT = process.env.PORT || 5000;

//connect to DB
connectDB();

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(exp.json());
app.use(exp.static("public"));

//routes
app.use('/login',require('./routes/login'));
// app.use('/register',require('./routes/register'));
app.use('/batch',require('./routes/batch'));
app.use('/user',require('./routes/user'));
app.use('/score',require('./routes/score'));
// app.use('/fetch',require('./routes/fetch'));
app.use('/fetch',fetchapp)

// Schedule the cron job to run at 12:00

const dailyUpdate = async ()=>{
    const batches = await Batch.find().exec();
    // console.log(batches.length);
    for(let i=0;i<batches.length;i++){
        const batch = batches[i];
        // console.log(batch.batchname);
        const batchData = {
            batchname:batch.batchname,
        }
        // console.log(batchData);
        await axios.post('http://localhost:5000/score/fetchScores', batchData, {
            headers: {'Content-Type' : 'application/json'}
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err=>{
            console.error(err);
        });
        // console.log(batchData);
    }
}

cron.schedule('20 00 * * *', () => {
    dailyUpdate();
});

// const sendReminders = async () => {
//     const batches = await Batch.find({}).exec();
//     for(let i=0;i<batches.length;i++){
//         const batch = batches[i];
//         const users = batch.users;
//         if(!users){
//             return res.sendStatus(401);
//         }

//         for(let j=0;j<users.length;j++){
//             const user = users[j];
//             if(!user.isActive){

//                 const templateparams = {
//                     name: user.fullname,
//                     email: user.email
//                 };

//                 console.log(templateparams)
                
//                 emailjs.send('service_cuitdwa', 'template_99uwo69', templateparams, 'JeeyJmTk8Wv7Z8qfi')
//                 .then((result) => {
//                     console.log("sent");
//                 }, (error) => {
//                     console.log("error");
//                 });
//             }
//         }
//     }
// }

// cron.schedule('59 00 * * *',()=>{
//     sendReminders();
// });

   


//server connection
mongoose.connection.once('open', ()=>{
    app.listen(PORT,()=>{console.log(`server started on port ${PORT}`)});
});



