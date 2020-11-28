const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/music', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(res => console.log('数据库连接成功'))
    .catch(err => console.log('数据库连接失败'))