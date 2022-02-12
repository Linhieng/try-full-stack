/* 
  定义一个模块，用来连接 mongo 数据库
*/

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/image-hosting')

mongoose.connection.once('open', () => {
  console.log('数据库 image-hosting 连接成功')
})
