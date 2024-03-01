import express from "express"
import { addQR, deleteQR } from "../controllers/qr.js"
import { validateAddQR } from "../validators/qr.js"

const router = express.Router()

//Generates QR
router.patch('/:id', validateAddQR, addQR)

//Delete QR from id
router.delete('/:user/:qr', deleteQR)

export default router
