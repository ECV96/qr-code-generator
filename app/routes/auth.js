import express from "express"
import { login, register } from "../controllers/auth.js"
import {validateCreate, validateLogin} from "../validators/auth.js"

const router = express.Router()

router.post('/login', validateLogin, login)

router.post('/register', validateCreate, register)

export default router
