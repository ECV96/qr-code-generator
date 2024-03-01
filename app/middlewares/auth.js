const isAuthorized = (req, res, next) => {
    const token = req.headers.authorization?.split(' ').pop()
    if(token === "123") next()
    else res.status(401).send("Unauthorized")
}

export { isAuthorized }
