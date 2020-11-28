const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;


const mongoose = require('mongoose');
const User = mongoose.model('user')



const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret'; //之前token的验证名字



module.exports = passport => {
    passport.use(new JwtStrategy(opts, async(jwt_payload, done) => {
        await User.find({
            _id: jwt_payload.id
        }).then(user => {
            if (user) { return done(null, user) }
            return done(null, false)
        }).catch(err => console.log(err))


    }));
}