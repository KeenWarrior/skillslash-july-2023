const tokenService = require("../services/token.service");
const userService = require("../services/user.service");

async function login(req, res) {
  const { email, password } = req.body;
  const user = await userService.getUserByEmail(email);
  if (!user) {
    return res.status(401).json({ error: "User not found" });
  } else {
    if (user.verifyPassword(password)) {
      const token = await tokenService.createToken(user, "access", 15);
      return res.status(200).json({ user, token });
    }
  }
}

module.exports = {
    login
}
