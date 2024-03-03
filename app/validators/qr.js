import { check } from "express-validator"
import validateResult from "../helpers/validateHelper.js"

//Validator for qr/:id
const validateAddQR = [
    check("url")
        .not()
        .isEmpty()
        .withMessage("URL is required"),
    check("name")
        .not()
        .isEmpty()
        .withMessage("Name is required"),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateDeleteQr = [
    check("user")
        .isMongoId(),
    check("qr")
        .isMongoId(),
    (req,res,next) => {
        validateResult(req, res, next)
    }
]

export { validateAddQR, validateDeleteQr }
