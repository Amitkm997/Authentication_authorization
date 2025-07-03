
import express from 'express';
import { addUser,getUser,getUserById,updateUser,deleteUser } from '../controllers/userController.js';
import { register } from '../controllers/register.js';
const router=express.Router();

//add new user
router.post('/user',addUser)

//get all users
router.get('/user',getUser)

//get user by id
router.get('/user/:id',getUserById)

//update user
router.put('/user/:id',updateUser)

//delete User
router.delete('/user/:id',deleteUser)

//register user
router.post('/register',register)

export default router;