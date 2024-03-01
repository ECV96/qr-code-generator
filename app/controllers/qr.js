import { httpError } from "../helpers/handleError.js"
import { qrGenerator } from "../helpers/handleQrGenerator.js";
import userModel from "../models/users.js"

const addQR = async (req, res) => {
    try {
        const _id = req.params.id
        const {name, url} = req.body

        const qr = await qrGenerator(url)
        
        const updated = await userModel.findByIdAndUpdate(_id, {$push: {qr: {data: qr, name: name} } })

        if(!updated) {
            console.error(updated)
            return res.status(500).send({message: "Server Error"})
        }

        console.info(updated)
        res.status(200).send({message: 'OK'})
    } catch (error) {
        httpError(res, error)
    }
}

const deleteQR = async (req, res) => {

    try {
        const _id = req.params.user
        const qr = req.params.qr
    
        const deleted = await userModel.updateOne({_id: _id}, {$pull: {qr: {_id: qr}}})
        console.info(deleted)

        res.status(200).send({message: 'OK'})

    } catch (error) {
        httpError(res, error)
    }
    
}

export { addQR, deleteQR }
