const JwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const userServices = require("../services/user.service");
const config = require("./config");

const options = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
};

const verify = async (payload, done) => {
  if (payload.exp < Date.now()) {
    return done("null", false);
  }

  const uid = payload.sub;
  const user = await userServices.getUserById(uid);

  if (!user) {
    return done(null, false);
  } else {
    return done(null, user);
  }
};

const strategy = new JwtStrategy(options, verify);

module.exports = strategy;
