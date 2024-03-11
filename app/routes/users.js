import express from "express"
import {getUser, getUsers} from "../controllers/users.js"
import { validateGetById } from "../validators/users.js"

const router = express.Router()

/**
 * Get /
 * @openapi
 * /:
 *  get:
 *      tags:
 *          - Users
 *      summary: "Get a list of all user"
 *      description: "Get a list of all user"
 *      responses:
 *          "200":
 *              description: "OK"
 */
router.get('/', getUsers)

/**
 * Get /:id
 * @openapi
 * /:id:
 *  get:
 *      tags:
 *          - Users
 *      summary: "Get a user"
 *      description: "Get a specific user from an id"
 *      parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "User Id"
 *            required: "true"
 *            schema:
 *                type: "string"
 *      responses:
 *          "200":
 *              description: "OK"
 *          "404":
 *              description: "User not found"
 */
router.get('/:id', validateGetById, getUser)

export default router
