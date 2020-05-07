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
router.get('/frmw-005/', (req, res) => res.sendFile(path.join(__dirname, 'public/frmw-005/dist/index.html')))
router.get('/frmw-006/', (req, res) => res.sendFile(path.join(__dirname, 'public/frmw-006/index.html')))
router.get('/frmw-007/', (req, res) => res.sendFile(path.join(__dirname, 'public/frmw-007/docs/index.html')))
router.get('/youtube/', (req, res) => res.sendFile(path.join(__dirname, 'public/youtube/index.html')))
app.listen(PORT)