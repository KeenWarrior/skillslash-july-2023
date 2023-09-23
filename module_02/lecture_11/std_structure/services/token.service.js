const Token = require("../models/token.model");
const jwt = require("jsonwebtoken");
const { use } = require("../routes");
const config = require("../config/config");

async function createToken(user, tokenType, expiresIn) {
  const payload = {
    name: user.name,
    email: user.email,
    sub: user.id,
    iat: Date.now(),
    exp: Date.now() + expiresIn * 60 * 1000,
    type: tokenType,
  };

  const token = jwt.sign(payload, config.jwt.secret);
  await Token.create({
    token,
    userId: payload.sub,
    expires: new Date(Date.now() + expiresIn * 60 * 1000),
    type: payload.type,
  });
  return token;
}

module.exports = {
    createToken,
}
