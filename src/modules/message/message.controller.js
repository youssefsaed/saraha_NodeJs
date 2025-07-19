import msgModel from "../../../DB/model/message.model.js";
import AppError from "../../utils/appError.js";


const addMsg = async (req, res) => {
    await msgModel.insertMany({
        message: req.body.message,
        receivedId: req.params.id
    })
    return res.json({ message: "success" })
}
const getMsg = async (req, res) => {
    const msg = await msgModel.find({ receivedId: req.userId })
    return res.json({ message: "success", msg })
}
const deleteMsg = async (req, res,next) => {
    const msg = await msgModel.findOneAndDelete({
        receivedId: req.userId,
        _id: req.params.id
    })
    if (!msg) return next(new AppError('fail',404))
    return res.json({ message: "success" })
}







export {
    addMsg,
    getMsg,
    deleteMsg
}