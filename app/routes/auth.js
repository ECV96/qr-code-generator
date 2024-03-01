import express from "express"
import { login, register } from "../controllers/auth.js"
import {validateCreate, validateLogin} from "../validators/auth.js"

const router = express.Router()

// User login
router.post('/login', validateLogin, login)

// User registration
router.post('/register', validateCreate, register)

export default router
