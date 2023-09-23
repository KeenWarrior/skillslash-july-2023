const passport = require("passport");
const rolesToRights = require("../config/roles");

passport.authenticate("jwt", { session: false });

const rights = (...requiredRights) => {
  return (req, res, next) => {
    const role = req.user.role;
    const userRights = rolesToRights[role];

    for(let right of requiredRights) {
      if(!userRights.has(right)) {
        return res.status(403).send("Forbidden");
      }
    }

    next();
  };
}


const auth = () => {
  return passport.authenticate("jwt", { session: false });
}

module.exports = {auth, rights};
