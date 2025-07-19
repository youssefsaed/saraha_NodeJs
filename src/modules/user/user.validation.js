import Joi from "joi" ;


const signUpSchema={
    body:Joi.object({
        name:Joi.string().min(3).max(20).required(),
        // email:Joi.string().pattern(new RegExp('^[A-Za-z0-9]{2,}@(gmail||yahoo).com$')).required(),
        email:Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[A-Za-z0-9]{5,20}$')).required()
    })
}
const signInSchema={
    body:Joi.object({
        email:Joi.string().pattern(new RegExp('^[A-Za-z0-9]{2,}@(gmail||yahoo).com$')).required(),
        password: Joi.string().pattern(new RegExp('^[A-Za-z0-9]{5,20}$')).required()
    })
}
const userUpdate={
    body:Joi.object({
        name:Joi.string().min(3).max(20).required(),
    })
}


export{
    signUpSchema,
    signInSchema,
    userUpdate
}