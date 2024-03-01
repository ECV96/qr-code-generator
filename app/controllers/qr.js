import { httpError } from "../helpers/handleError.js"
import { qrGenerator } from "../helpers/handleQrGenerator.js";
import userModel from "../models/users.js"

//Generates QR
//Add QR to the user register
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
        res.status(200).send({message: 'OK'})
    } catch (error) {
        console.error(error)
        httpError(res, error)
    }
}

//Delets qr
// Needs user id and qr id
const deleteQR = async (req, res) => {
    try {
        const _id = req.params.user
        const qr = req.params.qr
    
        await userModel.updateOne({_id: _id}, {$pull: {qr: {_id: qr}}})

        res.status(200).send({message: 'OK'})
    } catch (error) {
        console.error(error)
        httpError(res, error)
    }
}

export { addQR, deleteQR }
