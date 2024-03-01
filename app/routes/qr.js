import express from "express"
import { addQR, deleteQR } from "../controllers/qr.js"
import { validateAddQR } from "../validators/qr.js"

const router = express.Router()

router.patch('/:id', validateAddQR, addQR)

router.delete('/:user/:qr', deleteQR)

export default router
