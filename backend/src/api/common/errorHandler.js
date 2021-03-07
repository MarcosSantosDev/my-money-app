const _ = require('lodash')

const parseErrors = function (nodeRestfullErrors) {
    const errors = []
    _.forIn(nodeRestfullErrors, (error) => errors.push(error.message))
    return errors
}

module.exports = function (request, response, next) {
    const bundle = response.locals.bundle
    
    if (bundle.errors) {
        const errors = parseErrors(bundle.errors)
        response.status(500).json({ errors })
    } else {
        next()
    }
}