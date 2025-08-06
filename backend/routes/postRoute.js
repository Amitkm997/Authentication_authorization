

import express from "express";
import { authentication,authorization } from "../middleware/auth.js";
import { createPost, getPosts,likePost,editPost} from "../controllers/postController.js";

const router =express.Router();

router.post('/post',authentication,createPost);
router.get('/post',authentication,getPosts);
router.post('/like/:postId',authentication,likePost);
router.put('/edit/:postId',authentication,authorization,editPost)

export default router;