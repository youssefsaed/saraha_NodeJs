import JWT from 'jsonwebtoken'
import userModel from '../DB/model/user.model.js'
import AppError from '../src/utils/appError.js'

const auth = (req, res, next) => {
    const token = req.header('token')
    JWT.verify(token, process.env.SECRETKEY, async (err, decode) => {
        if (err) return next(new AppError(err.message, 400))
        const user = await userModel.findById(decode.id)
        if (!user)  return next(new AppError('email is exist', 404))
        req.userId = user._id
        return next()
    })

}

export default auth