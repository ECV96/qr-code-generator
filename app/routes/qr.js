import express from "express"
import { addQR, deleteQR } from "../controllers/qr.js"
import { validateAddQR, validateDeleteQr } from "../validators/qr.js"
import { checkAuth } from "../middlewares/auth.js"

const router = express.Router()

/**
 * Patch /:id
 * @openapi
 * /:id:
 *  patch:
 *      tags:
 *          - QR
 *      summary: "QR Generator"
 *      description: "Generates a QR and add it to a user"
 *      parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "User Id that generates the QR"
 *            required: "true"
 *            schema:
 *                type: "string"
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/qrGenerator"
 *      responses:
 *          "200":
 *              description: "OK"
 *          "500":
 *              description: "Server Error"
 */
router.patch('/:id', checkAuth, validateAddQR, addQR)

/**
 * Delete /:user/:qr
 * @openapi
 * /:user/:qr:
 *  delete:
 *      tags:
 *          - QR
 *      summary: "Delete QR"
 *      description: "Delete specific QR from a user"
 *      parameters:
 *          - name: "user"
 *            in: "path"
 *            description: "User Id that wants to delete a QR"
 *            required: "true"
 *            schema:
 *                type: "string"
 *          - name: "qr"
 *            in: "path"
 *            description: "QR Id that is going to be deleted"
 *            required: "true"
 *            schema:
 *                type: "string"
 *      responses:
 *          "200":
 *              description: "OK"
 *          "500":
 *              description: "Server Error"
 */
router.delete('/:user/:qr', validateDeleteQr, deleteQR)

export default router
