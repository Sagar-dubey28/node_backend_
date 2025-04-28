import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts",
  },
  user: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
},{timestamps:true});

const commentModel =  mongoose.model("comments", commentSchema);

export default commentModel;
