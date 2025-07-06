
import Post from '../models/postModel.js'
export const createPost=async(req,res)=>{
    const{title,content}=req.body;
    console.log(req.user)
    if(!title || !content) return res.status(400).send({message:"Title and content are required"});

    const post=await Post.create({
        title,
        content,
        createdBy:req.user.id
    })
    res.status(201).send({message:"post created successfully",post:post});
}


export const getPosts=async(req,res)=>{
    const post=await Post.find(); //if not found anything it will give []
    if(post.length<1) res.send("no post created");

    res.status(200).send({message:"data fetched successfully",post})


}
