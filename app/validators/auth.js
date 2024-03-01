import { check } from "express-validator"
import validateResult from "../helpers/validateHelper.js"

const validateCreate = [
    check("name")
        .not()
        .isEmpty()
        .withMessage("Name is required"),
    check("email")
        .not()
        .isEmpty()
        .withMessage("E-mail is required").bail()
        .isEmail()
        .withMessage("Invalid E-mail"),
    check("password")
        .isStrongPassword(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateLogin = [
    check("email")
        .not()
        .isEmpty()
        .withMessage("E-mail is required").bail()
        .isEmail()
        .withMessage("Invalid E-mail"),
    check("password")
        .isStrongPassword(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

export {validateCreate, validateLogin}