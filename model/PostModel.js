const mongoose = require("mongoose");

const postSchema =  new mongoose.Schema({
        title:{
            type:String,
            require:true
        },
        comments:{
            type:String,
            require:false
        }
})


const postModel = mongoose.model("posts",postSchema);

module.exports = postModel;