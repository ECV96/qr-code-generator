import express from "express"
import {getUser, getUsers} from "../controllers/users.js"
import { validateGetById } from "../validators/users.js"

const router = express.Router()

//Get a list of all users
router.get('/', getUsers)

//Get user from id
router.get('/:id', validateGetById, getUser)

export default router
