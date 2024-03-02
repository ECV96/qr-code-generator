import express from "express"
import { addQR, deleteQR } from "../controllers/qr.js"
import { validateAddQR } from "../validators/qr.js"
import { checkAuth } from "../middlewares/auth.js"

const router = express.Router()

//Generates QR
router.patch('/:id', checkAuth, validateAddQR, addQR)

//Delete QR from id
router.delete('/:user/:qr', deleteQR)

export default router
