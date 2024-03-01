import qrcode from "qrcode";

//Generates QR
const qrGenerator = (url) => {

    return new Promise((resolve, reject) => {
        qrcode.toDataURL(url, (err, data) => {
            if(err) reject(err)
            else {
                console.info(data)
                resolve(data)
            }
        })
    })
}

export { qrGenerator }
