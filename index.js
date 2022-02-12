const global = require('./constant')

const express = require('express')

const uploadImg = require('./mongoDB/uploadImage')
const getImage = require('./mongoDB/getImage')

// 将中间引入后，作为 post 函数的第二个参数使用
const singleUpload = require('./middleware/multer/uploadSingle')
const arrayUpload = require('./middleware/multer/uploadArray')
const fieldsUpdate = require('./middleware/multer/updateFields')

const app = express()

app.listen(global.PORT, () => {console.log('succeed')})


/* ============== get ==============  */

app.get('/', (req, res) => {

  res.setHeader('Content-Type', 'text/html;charset=UTF-8')
  res.sendFile(__dirname + '/dist/index.html')
})

app.get('/getCookie', (req, res) => {
  res.cookie(`cookieName${Date.now()}`, 'cookie-value')
  res.send('succeed had set cookie!')
})

app.get('/getImage', async (req, res) => {
  const urls = await getImage.getPart()
  const resData = {urls}
  res.status('200')
  // res.setHeader('Content-Type', 'application-')
  res.send(JSON.stringify(resData))
})

/* ============== post ==============  */

app.post('/singleImage', singleUpload, function (req, res, next) { 
  uploadImg.uploadSingle('singleImage', req.file)
  res.status('200')
  res.send('succeed')
})

app.post('/arrayUpload', arrayUpload, function (req, res, next) { 
  uploadImg.uploadArray('arrayUpload', req.files)
  res.status('200')
  res.send('succeed')
})

app.post('/fieldsUpdate', fieldsUpdate, function (req, res, next) { 
  uploadImg.uploadFields('files', req.files, req.body)
  res.status('200')
  res.send('succeed')
})


/* ============== use ==============  */


app.use(express.static('files'))
