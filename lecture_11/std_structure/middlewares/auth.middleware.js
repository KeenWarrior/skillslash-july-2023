const passport = require("passport");

const auth = () => {
  return passport.authenticate("jwt", { session: false });
};

module.exports = {
  auth,
};
