const { response } = require('express');


const ResponseBadRequest = (res = response, props) => {
    return res.status(400).json({
        ok: false,
        ...props
    })
}

const ResponseCreated = (res = response, props) => {
    return res.status(201).json({
        ok: true,
        ...props
    })
}

const ResponseOk = (res = response, props) => {
    return res.status(200).json({
        ok: true,
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
    ResponseServerError
}