import jwt from 'jsonwebtoken'

export const authentication=(req,res,next)=>{
    const authHeader=req.headers.authorization;

    if(!authHeader) return res.send("No token provided");

    let decodedToken=jwt.verify(authHeader,"This is my secret key");

    console.log(decodedToken);

    req.user=decodedToken;

    next() //to pass controller to next route/middleware

}