
const express = require('express')
const bodyParser = require('body-parser')
const server = express()

const PORT = 2021

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

server.listen(PORT, function() {
    console.log(`BACKEND is running on the port ${PORT}.`)
})

