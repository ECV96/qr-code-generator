import { validationResult } from "express-validator"

//Handle validation models
const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (error) {
        res.status(403).send({errors: error.array()})
    }
}

export default validateResult