//import model

const Comment = require("../models/commentModel");
const Post=  require("../models/postModel");

//bussiness logic
exports.createComment = async (req,res) =>{
    try{
        //fetch data from request body

        const {post,user,body} = req.body;

        //create a comment object

        const comment = new Comment ({
            post,user,body
        });

        //save the comment into the database
        const savedComment = await comment.save();

        //find the post by id, add the new comment to its comment array
        const updatePost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
            .populate("comments") //populate thecomments array with comment document
            .exec(); //for execute the query

            // response men post ke andar hmari updated ost hogi
            res.json({
                post:updatePost,
            })


    }
    catch(err)
    {
        return res.status(500).json({
            error:"Error while creating comment",
        });

    }
}
