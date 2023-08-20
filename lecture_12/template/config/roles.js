const rolesToRights = {
  admin: new Set(["getUsers", "manageUsers", "createUsers"]),
  manager: new Set(["createUsers"]),
  user: new Set([]),
};

module.exports = rolesToRights;
