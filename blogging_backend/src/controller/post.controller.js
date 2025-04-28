import Post from "../models/post.models.js";

export const createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({ title, body });
    const savedPost = await post.save();
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
  res.status(200).json({
    success:true,
    message:"Post created sucessfully"
  })
};

export const getAllpost = async (req, res) => {
  try {
    const allPost = await Post.find()
      .populate("likes")
      .populate("comments")
      .exec();

    res.status(200).json({
      success: true,
      allpost: allPost,
      message: "Suceesfully getting all post",
    });
  } catch (error) {
    console.error(error);
    console.log(error.message);
  }
};
