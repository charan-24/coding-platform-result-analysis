const mongoose = require('mongoose');
// const uri = "mongodb+srv://charanpasupunooti137:m8F3sXI29OEMjvNS@cluster0.komulec.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb://localhost:27017/resultanlaysis";
const mongo = async ()=>{
    const conn = await mongoose.connect(uri)
                     .then(()=>{
                        console.log("database connected");
                     })
                     .catch((err)=>{
                        console.log(err);
                     });
}
mongo();

require('./model');