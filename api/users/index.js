const express = require('express')
const users = express.Router()
const User = require('../../moduel/user')
const passpost = require('passport')

//
const register = require('./userschild/register')
const login = require('./userschild/login')
const passport = require('../../config/passport')

users.get('/test', (req, res) => {
    res.json({
        name: '123123'
    })
})

//注册
users.post('/register', register)

//登录
users.post('/login', login)

//
users.get('/current/:id', passpost.authenticate('jwt', { session: false }),
    (req, res) => {
        res.json(req.user)
    })

module.exports = users