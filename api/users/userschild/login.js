const User = require('../../../moduel/user')
const jwt = require('jsonwebtoken')
module.exports = (req, res) => {

    User.findOne({ email: req.body.email }).then(user => {
        if (!user) return res.status(400).json('邮箱未注册')
        else {
            if (user.password === req.body.password) {
                //设置token
                const rule = {
                    id: user._id,
                    name: user.name
                }
                jwt.sign(rule, 'secret', { expiresIn: 3600 }, (err, token) => {
                    if (err) throw err;
                    res.json({
                        password: '密码正确',
                        token: 'Bearer ' + token
                    })
                })

            } else { return res.status(404).json('密码不正确') }
        }
    })
}