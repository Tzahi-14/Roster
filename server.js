const express = require('express')
const path = require('path')

const bodyParser = require('body-parser')


const app = express()
const api = require('./server/api')

app.use(bodyParser.json())
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', api)

const port = 3002

app.listen(port, function () {

})

