import express from 'express'
import userRouter from './src/modules/user/user.routes.js'
import dotenv from 'dotenv'
import dbConnection from './DB/dbConnection.js'
import msgRouter from './src/modules/message/message.routes.js'
import AppError from './src/utils/appError.js'
import cors from 'cors'
dotenv.config()
const app = express()



app.use(cors())
app.use(express.json())
app.use('/saraha/user', userRouter)
app.use('/saraha/message', msgRouter)

app.all('*', (req, res, next) => {
    next(new AppError("invalid url - cant access this endpoint" + req.originalUrl,400))
})

app.use((err, req, res, next) => {
    res.status(err.status||500).json({ message: err.message })
})


dbConnection()


app.listen(3000, () => {
    console.log('server conected......');

})