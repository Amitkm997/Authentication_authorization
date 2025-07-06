import jwt from 'jsonwebtoken'
import Post from '../models/postModel.js';

export const authentication=(req,res,next)=>{
    const authHeader=req.headers.authorization;

    if(!authHeader) return res.send("No token provided");

    let decodedToken=jwt.verify(authHeader,"This is my secret key");

    console.log(decodedToken);

    req.user=decodedToken;

    next() //to pass controller to next route/middleware

}


export const authorization=async(req,res,next)=>{
    let userId=req.user.id;
    let postId=req.params.postId;

    let post=await Post.findById(postId);
    if(!post) return res.status(400).json({message:"post not found"})
    
    let loggedInUser=post.createdBy;

    if(loggedInUser != userId) res.status(403).send({message:"unothorized User"});

    next()
}