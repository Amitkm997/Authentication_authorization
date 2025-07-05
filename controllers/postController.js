
import Post from '../models/postModel.js'
export const createPost=async(req,res)=>{
    const{title,content}=req.body;

    if(!title || !content) return res.status(400).send({message:"Title and content are required"});

    const post=await Post.create({
        title,
        content,
        createdBy:req.user.id
    })
    res.status(201).send({message:"post created successfully",post:post});
}
