import express from "express"
import fs from "fs"
import path from 'path';
import { fileURLToPath } from 'url';

// The path of the current file is searched
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathRouter = `${__dirname}`

const router = express.Router()

// The file name extension is removed
const removeExtension = (filename) => {
    return filename.split('.').shift()
}

// All files in the path provided are read and paths are created based on the name of each file.
fs.readdirSync(pathRouter).forEach( async (file) => {
    const route = removeExtension(file)
    const skip = ['index'].includes(route)
    if(!skip) {
        router.use(`/${route}`, (await import(`./${file}`)).default)
    }
})

export default router
