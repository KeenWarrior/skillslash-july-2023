const tokenService = require("../services/token.service");
const userService = require("../services/user.service");


async function register(req, res) {
  const user = await userService.createUser(req.body);
  const token = await tokenService.createToken(user, "access", 15);
  return res.status(201).json({ user, token });
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await userService.getUserByEmail(email);
  console.log(user);
  if (!user) {
    return res.status(401).json({ error: "User not found" });
  } else {
    if (user.verifyPassword(password)) {
      console.log("password correct");
      const token = await tokenService.createToken(user, "access", 15);
      return res.status(200).json({ user, token });
    } else {
      return res.status(401).json({ error: "Password incorrect" });
    }
  }
}

async function userProfile(req, res) {
    const user = req.user;
    return res.status(200).json(user);
}

module.exports = {
    login,
    userProfile,
    register
}
