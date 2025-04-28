import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
    },
    user: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const likeModel = mongoose.model("likes", likeSchema);

export default likeModel;
