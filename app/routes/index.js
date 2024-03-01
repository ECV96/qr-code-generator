import express from "express"
import fs from "fs"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router()
const pathRouter = `${__dirname}`

const removeExtension = (filename) => {
    return filename.split('.').shift()
}

fs.readdirSync(pathRouter).forEach( async (file) => {
    const route = removeExtension(file)
    const skip = ['index'].includes(route)
    if(!skip) {
        router.use(`/${route}`, (await import(`./${file}`)).default)
    }
})

export default router
