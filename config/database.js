const mongoose = require('mongoose');

require("dotenv").config();

const connectWithDb =  () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("DB Connected Succesfully"))
    .catch((err)=>{
        console.log("DB facing connecting issues",err);
        process.exit(1);
    })
};


module.exports = connectWithDb;