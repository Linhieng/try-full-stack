const multer = require('multer')
const options = require('./optionsMulter')

const fields = [
  { name: 'describe', maxCount: 1},
  { name: 'files', maxCount: 1},
]
const upload = multer(options).fields(fields)

module.exports = upload
