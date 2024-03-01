import { httpError } from "../helpers/handleError.js"
import userModel from "../models/users.js" 

const getUsers = async (req, res) => {
    try {
        const listAll = await userModel.find({})
        return res.status(200).send({data: listAll})
    } catch (error) {
        httpError(res, error)
    }
}

const getUser = async (req, res) => {
    try {
        const _id = req.params.id
        const user = await userModel.findById(_id)
        if (!user) return res.status(404).send({ error: 'User not found' })
        
        return res.status(200).send({
            data: {
                name: user.name,
                email: user.email
            }
        })

    } catch (error) {
        httpError(res,error)
    }
}

const updateUser = (req, res) => {
    
}

const deleteUsers = (req, res) => {
    
}

export {getUsers, getUser, updateUser, deleteUsers}
