const User = require('../../../moduel/user')
module.exports = (req, res) => {
    User.find({ email: req.body.email }).then(user => {
        if (!user.length) {
            let newUser = new User({
                email: req.body.email,
                name: req.body.name,
                password: req.body.password
            })
            newUser.save().then(result => res.json(result))
        } else {
            return res.status(404).json({ name: '邮箱已存在' })
        }
    })

}