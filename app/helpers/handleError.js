const httpError = (res, err) => {
    console.error(err)
    res.status(500).send({error: 'Server Error'})
}

export {httpError}
