
let express = require('express')
let db = require('./db')
let app = express()
require('dotenv').config()

const PORT = process.env.PORT||3000

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('hello world server here')
})

let personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes)

let menuRoutes = require('./routes/menuRoutes')
app.use('/menu',menuRoutes)




app.listen(PORT, (() => console.log('server 3000 available')))
