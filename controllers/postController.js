
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


export const likePost=async(req,res)=>{
    try{
        const postId=req.params.postId;
        const post=await Post.findById(postId)
        
        post.likes +=1;
        const updatedPost=await post.save();

        return res.status(200).json({
            message:"Likes updated successfully",
            updatedPost:updatedPost
        })
    }catch(error){
        console.error('Error in LikePost;',error)
        return res.status(500).json({message:"Internal server error"})
    }
}

export const editPost=async(req,res)=>{
    try{
        const postId=req.params.postId;
        const {title,content}=req.body;

        //find a post
        const post=await Post.findById(postId);
        if(!post){
            return res.status(404).json({
                message:"post not found"
            })
        }

        post.title=title;
        post.content=content;

        const updatedPost=await post.save();
        
        return res.status(200).json({
            message:"Post updated successfully",
            post:post
        })

    }catch(error){
        console.error('Error in LikePost;',error)
        return res.status(500).json({message:"Internal server error"})
    }
}