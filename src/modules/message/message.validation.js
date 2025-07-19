import Joi from "joi" ;


const addMsgSchema={
    body:Joi.object({
        message:Joi.string().min(3).max(20).required(),
    }),
    params:Joi.object({
        id:Joi.string().hex().length(24).required()
    })
}
const deleteMsgSchema={
    params:Joi.object({
        id:Joi.string().hex().length(24).required()
    })
}



export{
    addMsgSchema,
    deleteMsgSchema
}