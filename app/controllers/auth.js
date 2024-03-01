import { httpError } from "../helpers/handleError.js"
import userModel from "../models/users.js"
import { encrypt, compare} from "../helpers/handleBcrypt.js"

const login = async (req, res) => {
    try {
        const {email, password} = req.body

        const user = await userModel.findOne({ email })
        if (!user) return res.status(404).send({ error: 'User not found' })

        const checkPassword = await compare(password, user.password)
        if (checkPassword) {
            return res.status(200).send({
                data: {
                    name: user.name,
                    email: user.email
                }
            })
        } else {
            return res.status(409).send({
                error: 'Invalid Credentials'
            })
        }
    } catch (error) {
        httpError(res,error)
    }
}

const register = async (req, res) => {
    try {
        const { email, password, name } = req.body
        const passwordHash = await encrypt(password)
        const registerUser = await userModel.create({
            email,
            name,
            password: passwordHash
        })

        console.info(registerUser)
        res.status(200).send({"message": "User Registered"})
    } catch (error) {
        httpError(res,error)
    }
}

export {login, register}
