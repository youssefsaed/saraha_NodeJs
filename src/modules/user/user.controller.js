import bcrypt from "bcryptjs"
import userModel from "../../../DB/model/user.model.js"
import JWT from 'jsonwebtoken'
import seneMail from "../../email/nodemailer .js"
import AppError from "../../utils/appError.js"

const signup = async (req, res, next) => {
    const user = await userModel.findOne({ email: req.body.email })
    if (user) return next(new AppError('email is exist', 409))
    bcrypt.hash(req.body.password, ++process.env.ROUND, async (err, hash) => {
        await userModel.insertMany({
            name: req.body.name,
            email: req.body.email,
            password: hash
        })
        const isSend = await seneMail({ email: req.body.email, name: req.body.name })
        if (isSend) return res.status(201).json({ message: "success" })
    })

}
const signin = async (req, res, next) => {
    const user = await userModel.findOne({ email: req.body.email })
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) return next(new AppError('email or password invalid', 401))
    if (!user.isConfirmed) return next(new AppError("check your email you need to confirm", 401))
    const token = JWT.sign({ id: user._id }, process.env.SECRETKEY)
    return res.status(200).json({ message: "success", token })
}

const getUser = async (req, res, next) => {
    const user = await userModel.findById(req.userId)
    return res.status(200).json({ message: "success", user })
}
const verify = async (req, res, next) => {
    JWT.verify(req.params.email, process.env.SECRETKEY_EMAIL, async (err, decode) => {
        if (err) return next(new AppError(err, 409)) 
        await userModel.findOneAndUpdate({ email: decode.email }, { isConfirmed: true })
        return res.status(200).json({ message: "success" })
    })

}
const deleteUser = async (req, res, next) => {
    await userModel.findByIdAndDelete(req.userId)
    return res.status(200).json({ message: "success" })
}
const updateUser = async (req, res, next) => {
    const user = await userModel.findByIdAndUpdate(req.userId, {
        name: req.body.name,
    }, { new: true })
    return res.status(200).json({ message: "success", user })
}

export {
    signup,
    signin,
    getUser,
    verify,
    deleteUser,
    updateUser
}