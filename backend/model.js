const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const userSchema = new Schema({
    name:String,
    password:String,
    coding_profiles:{
        uname:String,
        score:Number
    }
});

const User = model('User',userSchema);

const user1 = new User({
                name:"zxc",
                password:"123"
            });

// let a = User.findOneAndUpdate({name:"abc"},{coding_profiles:{
//                                                 uname:"zhc",
//                                                 score:"6969"
//                                             }})
//                                             .then(()=>{console.log("updated")})
//                                             .catch((err)=>{console.log(err)});

user1.save()
    .then(()=>{console.log("saved")})
    .catch((err)=>{console.log(err)});