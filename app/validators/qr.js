import { check } from "express-validator"
import validateResult from "../helpers/validateHelper.js"

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

export { validateAddQR }
