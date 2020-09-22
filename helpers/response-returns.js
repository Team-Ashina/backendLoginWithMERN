const { response } = require('express');



const ResponseOk = (res = response, props) => {
    return res.status(200).json({
        ok: true,
        ...props
    })
}

const ResponseCreated = (res = response, props) => {
    return res.status(201).json({
        ok: true,
        ...props
    })
}

const ResponseBadRequest = (res = response, props) => {
    return res.status(400).json({
        ok: false,
        ...props
    })
}

const ResponseUnauthorized = (res = response, props) => {
    return res.status(401).json({
        ok: false,
        ...props
    })
}

const ResponseServerError = (res = response, props) => {
    return res.status(500).json({
        ok: false,
        ...props
    })
}


module.exports = {
    ResponseBadRequest,
    ResponseCreated,
    ResponseOk,
    ResponseServerError,
    ResponseUnauthorized
}