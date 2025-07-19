import express from 'express'
import { addMsg, deleteMsg, getMsg } from './message.controller.js'
import auth from '../../../middleware/Auth.js'
import validation from '../../../middleware/validation.js'
import { addMsgSchema, deleteMsgSchema } from './message.validation.js'
import errorHandler from '../../utils/errorHandler.js'


const msgRouter = express()


msgRouter.post('/:id', validation(addMsgSchema), errorHandler(addMsg))
msgRouter.get('/', auth, errorHandler(getMsg))
msgRouter.delete('/:id', validation(deleteMsgSchema), auth, errorHandler(deleteMsg))




export default msgRouter