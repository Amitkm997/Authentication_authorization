import User from '../models/userModel.js'

//creating a new User
export const addUser=async(req,res)=>{
    const{name,email,password}=req.body;
    const newUser= new User({
       name:name,
       email:email,
       password:password
    })
    await newUser.save();
    res.send({message:"user Created suceesfully",data:newUser})
}

//get all users
export const getUser=async(req,res)=>{
    let users=await User.find();
    res.send({message:"user fetched successfully",users:users})
}

//get user by id
export const getUserById=async(req,res)=>{
    let id=req.params.id;
    let user=await User.findById(id);
    res.send(user)
}


//update user
// export const updateUser=async(req,res)=>{
//     const{email}=req.body
//     let id=req.params.id;
//     let user=await User.findById(id)
//     user.email=email
//     user.save()
//     res.send({message:"updated successfully",updatedUser:user})
// }

//update user by findByIdAndUpdate()
export const updateUser=async(req,res)=>{
    let updatedUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.send({updatedUser:updatedUser})
}

//delete user
// export const deleteUser=async(req,res)=>{
//     let id=req.params.id
//     let users=await User.find();
//     let userId=await User.findById(id);
//     console.log(users,userId)
//     let deletedUser=await users.filter((n)=>n._id!=userId._id);
//     res.send(deletedUser)
// }
    
//delete User findByIdAndDelete()
export const deleteUser=async(req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.send({message:"user Deleted successfully"})
} 
