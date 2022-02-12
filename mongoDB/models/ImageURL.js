const mongoose = require('mongoose')
const { Schema } = mongoose
const imageSchema = new Schema({
  name: String,
  url: String,
  remarks: String,
})
const imageModel = mongoose.model('url-images', imageSchema)

module.exports = imageModel