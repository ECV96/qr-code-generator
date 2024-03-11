import express from "express"
import { login, register } from "../controllers/auth.js"
import {validateCreate, validateLogin} from "../validators/auth.js"

const router = express.Router()

/**
 * Post Login
 * @openapi
 * /login:
 *  post:
 *      tags:
 *          - auth
 *      summary: "User Login"
 *      description: "Endpoint to login a user and generate JWT"
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/userLogin"
 *      responses:
 *          "200":
 *              description: "Success Login"
 *          "404":
 *              description: "User not found"
 *          "409":
 *              description: "Invalid credentials"
 */
router.post('/login', validateLogin, login)

/**
 * Post Register
 * @openapi
 * /register:
 *  post:
 *      tags:
 *          - auth
 *      summary: "User Registration"
 *      description: "Endpoint to Register a new user in the database"
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/userRegistration"
 *      responses:
 *          "200":
 *              description: "Success Login"
 */
router.post('/register', validateCreate, register)

export default router
