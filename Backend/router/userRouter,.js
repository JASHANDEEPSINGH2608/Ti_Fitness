import express from 'express'
import { authUser, logoutUser, registerUser } from '../controllers/user.controller.js';


const userRouter = express.Router();

userRouter.post('/',registerUser);
userRouter.post('/login',authUser)
userRouter.post('/logout',logoutUser)

export default userRouter