const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const passport = require('passport')
    //数据库
require('./moduel/index')
const Music = require('./moduel/music')
const User = require('./moduel/user')

//body-parser处理Post参数
app.use(bodyParser.urlencoded({ extended: false }))


//passprot初始化
app.use(passport.initialize())
require('./config/passport')(passport) //引入这个文件并把passport传过去


//路由


const users = require('./api/users/index')

app.use('/api/index', users)




const post = process.env.PORT || 5000;

app.listen(post, () => {
    console.log('服务器启动成功');
})