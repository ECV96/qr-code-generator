import mongoose from "mongoose";

const dbConnect = async () => {

    const DB_URI = process.env.DB_URI

    await mongoose.connect(DB_URI).then(
        () => console.info('mongodb connected'),
        (err) => console.error(err)
    )
}

export {dbConnect}
