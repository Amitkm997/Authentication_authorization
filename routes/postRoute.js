

import express from "express";
import { authentication } from "../middleware/auth.js";
import { createPost, getPosts} from "../controllers/postController.js";

const router =express.Router();

router.post('/post',authentication,createPost);
router.get('/post',authentication,getPosts)

export default router;