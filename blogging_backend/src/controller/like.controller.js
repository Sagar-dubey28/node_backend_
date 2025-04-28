import Like from "../models/like.models.js";
import Post from "../models/post.models.js";

export const likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({ post, user });
    const savedLike = await like.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();

      res.status(200).json({
        success:true,
        updatedPost:updatedPost,
        message:"User like succesfullly"
      })

  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
};

export const unlikePost = async (req, res) => {
 try {
    const { post, like } = req.body; // post ki id and like ki id request se bhej rhe hai.Isiliye Like extract kiya req se.
    const deleteLike = await Like.findByIdAndDelete({ post: post, _id: like });
  
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deleteLike._id } },
      { new: true }
    );
    res.status(200).json({
      success:true,
      post:updatedPost,
      message:"User Unliked succesfullly"
    })
 } catch (error) {
    console.error(error);
    console.log(error.message);
  }
 
};
