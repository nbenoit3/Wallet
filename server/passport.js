var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');
var db = require('./db');

passport.use(new LocalStrategy(function (username, password, done) {
    console.log("you reached localstrategy");
    db.one('SELECT * FROM users WHERE username = $1', [username])
        .then(function (user) {
            console.log(user);
            if (!user) {
                return done(null, false);
            }
            const isCorrectPassword = bcrypt.compareSync(password, user.password)
            if (!isCorrectPassword) {
                return done(null, false);
            }
            console.log("this was successful");
            return done(null, user);

        }).catch(function (err) {
            return done(err);
        })
}
));

passport.serializeUser(function (user, done) {
    done(null, user.username);
});

passport.deserializeUser(function (username, done) {
    db.one('SELECT * FROM users WHERE username = $1', [username])
        .then(user => done(null, user))
});

module.exports = passport;