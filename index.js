const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000
const router = express.Router();
 
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router);
router.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')))
router.get('/frmw-003/', (req, res) => res.sendFile(path.join(__dirname, 'public/frmw-003/dist/index.html')))
router.get('/frmw-004/', (req, res) => res.sendFile(path.join(__dirname, 'public/frmw-004/dist/index.html')))
app.listen(PORT)