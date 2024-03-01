import { check } from "express-validator"
import validateResult from "../helpers/validateHelper.js"

const validateGetById = [
    check("id")
        .isMongoId(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

export {validateGetById}