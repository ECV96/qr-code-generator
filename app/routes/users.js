import express from "express"
import {deleteUsers, getUser, getUsers, updateUser} from "../controllers/users.js"
import { validateGetById } from "../validators/users.js"

const router = express.Router()

router.get('/', getUsers)

router.get('/:id', validateGetById, getUser)

router.patch('/', updateUser)

router.delete('/:id', deleteUsers)

export default router
