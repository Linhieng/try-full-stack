require('./tools/connect_mongo')
const imageModel = require('./models/ImageURL')

function getPart () {
  let urls = []

  return new Promise((res, rej) => {
    imageModel.find({}, "url", {limit: 20}, (err, doc) => {
      if (err)
        rej(err)
      
      doc.forEach(img => { urls = [...urls, img.url] })
      res(urls)
    })
  })
}

const getImage = { getPart }

module.exports = getImage
