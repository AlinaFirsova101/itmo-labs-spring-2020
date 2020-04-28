const express = require('express')
const path = require('path')
const app = express()
const PORT = 5000
const func001 = require("./public/FUNC-001/func-001.js");

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => res.sendFile())
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')
.get('/FUNC-001', (req, res) => res.render('simple-lab', {code: func001, result: func001() }))
// app.get('/FUNC-001', (req, res) => res.sendFile(path.join(__dirname, '/public/FUNC-001.html')))
app.listen(PORT)