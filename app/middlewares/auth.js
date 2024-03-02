
import { verifyToken } from "../helpers/generateToken.js"

//Verifies token 
const checkAuth = async (req,res,next) => {
    try {
        const token = req.headers.authorization?.split(' ').pop() || null
        const tokenData = await verifyToken(token)

        if(tokenData?._id) {
            next()
        } else {
            return res.status(409).send({error: "Not Authorized"})
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Internal Server Error")
    }
}

export { checkAuth }
