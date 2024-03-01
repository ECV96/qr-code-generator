import bcrypt from "bcryptjs"

// Encrypt password
const encrypt = async (password) => {
    const hash = await bcrypt.hash(password, 10)
    return hash
}

//Compare plain password with encrypted password
const compare = async (password, hashPassword) => {
    return await bcrypt.compare(password, hashPassword)
}

export { encrypt, compare }
