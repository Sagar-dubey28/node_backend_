import express from "express";
import { createPost, getAllpost } from "../controller/post.controller.js";
import { likePost, unlikePost } from "../controller/like.controller.js";
import { commentPost } from "../controller/comment.controller.js";

const router = express.Router();

router.post("/createPost", createPost);
router.get("/getAllpost", getAllpost);

router.post("/likePost", likePost);
router.post("/UnlikePost", unlikePost);

router.post("/commentPost", commentPost);

export default router;
