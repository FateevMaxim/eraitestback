var express = require('express')
var cors = require('cors')
var request = require('request')
var app = express()
const jsonParser = express.json({limit: '50mb'})
app.use(cors())
app.options('*', cors())
const mariadb = require('mariadb')

//const host = '77.240.38.98'
const host = '192.168.0.99'
const port = 3000

let mariadb_login = {host: 'localhost', user: 'root', password: 'FullPassword', database: 'erai-cargo'}

const fs = require('fs')
eval(fs.readFileSync('./api/api_0.js').toString())
eval(fs.readFileSync('./api/api_1.js').toString())
eval(fs.readFileSync('./api/api_2.js').toString())
eval(fs.readFileSync('./api/api_3.js').toString())
eval(fs.readFileSync('./api/api_4.js').toString())
eval(fs.readFileSync('./api/api_5.js').toString())
eval(fs.readFileSync('./api/api_6.js').toString())
eval(fs.readFileSync('./api/api_7.js').toString())
eval(fs.readFileSync('./api/api_8.js').toString())
eval(fs.readFileSync('./api/api_9.js').toString())
eval(fs.readFileSync('./api/api_10.js').toString())
eval(fs.readFileSync('./api/api_11.js').toString())
eval(fs.readFileSync('./api/api_12.js').toString())
eval(fs.readFileSync('./api/api_13.js').toString())
eval(fs.readFileSync('./api/api_14.js').toString())
eval(fs.readFileSync('./api/api_15.js').toString())
eval(fs.readFileSync('./api/api_16.js').toString())
eval(fs.readFileSync('./api/api_17.js').toString())
eval(fs.readFileSync('./api/api_18.js').toString())
eval(fs.readFileSync('./api/api_19.js').toString())
eval(fs.readFileSync('./api/api_20.js').toString())

//END
app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})
