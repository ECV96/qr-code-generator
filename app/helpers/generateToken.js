import jwt from "jsonwebtoken"

//Generates token 
const tokenSign = async (user) => {
    return jwt.sign(
        {
            _id: user._id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "2h",
        }
    );
}

//Verify token
const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
        return null
    }
}

//Decoded token
const decodeSign = (token) => {
    return jwt.decode(token, null)
}



export { tokenSign, decodeSign, verifyToken }