const multer = require('multer')

/* 
storage 理解为磁盘存储的进一步操作
destination 就是 dest
filename 用于指定保存文件的文件名
  callback 函数有两个参数 error 和 filename
  第二个参数 filename 既最终保存的文件名
*/
const storage = multer.diskStorage({
  destination: './files',
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`)
    
  }
})
const limits = {
  fieldNameSize: 300,
  fields: 100,
  fileSize: 8*1024*1024 * 10,// 文件大小最大 10 M
  files: 10, // 文件数量最多 10 
}
/**
 * Optional function to control which files are uploaded. This is called
 * for every file that is processed.
 *
 * @param req The Express `Request` object.
 * @param file Object containing information about the processed file.
 * @param callback  a function to control which files should be uploaded and which should be skipped.
 * 该回调函数接收两个参数： error 和 Boolean
 * error 一般设置为 null 即可
 * Boolean, 为 true 代表接收该文件, false 代表拒绝该文件
 */

const fileFilter = (req, file, callback) => {
  console.log('fileFilter -- ',req.body)
  console.log('fileFilter -- ',file)
  const reg = /^image\/.+/
  if (reg.test(file.mimetype))
    callback(null, true)
  else 
    callback(new Error('only upload image'), false)
}

const options = {storage, limits, fileFilter}

module.exports = options