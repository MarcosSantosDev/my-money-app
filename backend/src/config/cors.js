module.exports = function (request, response, next) {
    response.header('Access-Controll-Allow-Origin', '*')
    response.header('Access-Controll-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    response.header('Access-Controll-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
    next()
}