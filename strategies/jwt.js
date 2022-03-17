const jwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcryptjs");
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SESSION_SECRET;

module.exports = new jwtStrategy(opts, (jwt_payload, done) => {
  User.findOne({ username: jwt_payload.username }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, { message: "Incorrect username" });
    }
    bcrypt.compare(jwt_payload.password, user.password, (err, res) => {
      if (res) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password" });
      }
    });
  });
});
