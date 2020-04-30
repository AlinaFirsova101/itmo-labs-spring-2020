const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000
let answer
 
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
answer = require("./public/FUNC-002/func-002.js");
app.get('/FUNC-002', (req, res) => res.render('simple-lab', {code: answer.code, result: answer.result }))
answer = require("./public/FUNC-003/func-003.js");
app.get('/FUNC-003', (req, res) => res.render('simple-lab', {code: answer.code, result: answer.result }))
app.listen(PORT)