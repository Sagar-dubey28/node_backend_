import Comment from "../models/comment.models.js";
import Post from "../models/post.models.js";

export const commentPost = async (req, res) => {
  try {
    const { post,user, body } = req.body;
    
    const comment = new Comment({ post, user, body });
    const savedComment = await comment.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    );
    console.log("saved comment", savedComment._id);
    


    res.status(200).json({
      success: true,
      updatedPost: updatedPost,
      message: "Comment sucessfully",
    });
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
};
