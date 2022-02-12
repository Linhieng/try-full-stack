require('./tools/connect_mongo')
const g = require('../constant')
const imageModel = require('./models/ImageURL')

function uploadSingle (name, file) {
  const url = `${g.PROTOCOL}${g.IP}:${g.PORT}/${file.filename}`
  const remarks = `${file.mimetype}-${file.size}`
  const img = new imageModel({ name, url, remarks })
  imageModel.create(img, error => {
    if (!error)
      console.log('single -- 成功加入数据库')
  })
}

function uploadArray (name, files) {
  const documents = []
  files.forEach( file => {
    const url = `${g.PROTOCOL}${g.IP}:${g.PORT}/${file.filename}`
    const remarks = `${file.mimetype}-${file.size}`
    const img = 
    documents.push(new imageModel({ name, url, remarks }))
  })
  imageModel.create(documents, error => {
    if (!error)
      console.log('array -- 成功加入数据库')
  })
}

function uploadFields (field, files, body) {
  const documents = []
  files[field].forEach( file => {
    const url = `${g.PROTOCOL}${g.IP}:${g.PORT}/${file.filename}`
    const remarks = `${JSON.stringify(body)}-${file.mimetype}-${file.size}`
    documents.push(new imageModel({ field, url, remarks }))
  })
  imageModel.create(documents, error => {
    if (!error)
      console.log('field -- 成功加入数据库')
  })
}

const uploadImg = {
  uploadSingle,
  uploadArray,
  uploadFields,
}


module.exports = uploadImg