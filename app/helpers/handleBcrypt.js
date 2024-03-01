import bcrypt from "bcryptjs"

const encrypt = async (password) => {
    const hash = await bcrypt.hash(password, 10)
    return hash
}

const compare = async (password, hashPassword) => {
    return await bcrypt.compare(password, hashPassword)
}

export { encrypt, compare }
