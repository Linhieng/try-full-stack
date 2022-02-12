const multer = require('multer')
const options = require('./optionsMulter')

const upload = multer(options).array('arrayUpload')

module.exports = upload
