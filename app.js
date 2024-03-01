import "dotenv/config"
import express from "express"
import cors from "cors"
import {dbConnect} from "./config/mongo.js"
import router from "./app/routes/index.js"

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/api/v1', router)

dbConnect()
app.listen(PORT, () => {
    console.info('listening port: ', PORT)
})
