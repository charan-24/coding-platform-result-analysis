//import modules
require('dotenv').config();
const exp = require('express');
const app = exp();
const bodyParser = require("body-parser");
const cors = require('cors');
const connectDB = require('./config/dbConn');
const mongoose = require('mongoose');
const fetchapp=require('./routes/fetch')
const PORT = process.env.PORT || 5000;

//connect to DB
connectDB();

//middlewares
app.use(cors());
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


//server connection
mongoose.connection.once('open', ()=>{
    app.listen(PORT,()=>{console.log(`server started on port ${PORT}`)});
});



