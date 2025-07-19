import express from 'express'
import { deleteUser, getUser, signin, signup, updateUser,verify } from './user.controller.js'
import auth from '../../../middleware/Auth.js'
import validation from '../../../middleware/validation.js'
import { signInSchema, signUpSchema, userUpdate } from './user.validation.js'
import errorHandler from '../../utils/errorHandler.js'


const userRouter=express()


userRouter.post('/signup',validation(signUpSchema),errorHandler(signup) )
userRouter.post('/signin',validation(signInSchema),errorHandler(signin))
userRouter.get('/',auth,errorHandler(getUser))
userRouter.get('/verify/:email',errorHandler(verify))
userRouter.delete('/',auth,errorHandler(deleteUser))
userRouter.put('/',auth,validation(userUpdate),errorHandler(updateUser))




export default userRouter