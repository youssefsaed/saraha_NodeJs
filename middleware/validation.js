const validation = (schema) => {
    return (req, res, next) => {
        const keys = ['body', 'params']
        let errors = []
        keys.forEach(key => {
            if (schema[key]) {
                const { error } = schema[key].validate(req[key], { abortEarly: false })
                if (error?.details) errors.push(error.details)
            }
        })
        if (!errors.length) return next()
        return res.json({ validationError: errors }) 
    }
}

export default validation