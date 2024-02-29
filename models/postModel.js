//import mongoose
const mongoose = require('mongoose');

//router handler
const postSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
    },

    body:{
        type:String,
        required:true,
    },

    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",//referance to the like model
    }],

    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",

    }]


})

module.exports = mongoose.model("Post",postSchema);
