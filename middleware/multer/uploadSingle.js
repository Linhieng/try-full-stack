const multer = require('multer')
const options = require('./optionsMulter')

const upload = multer(options).single('singleImage')

module.exports = upload
