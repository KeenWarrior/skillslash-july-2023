const roles = {
  admin: new Set(["getUsers", "manageUsers"]),
  user: new Set([]),
};

module.exports = roles;
