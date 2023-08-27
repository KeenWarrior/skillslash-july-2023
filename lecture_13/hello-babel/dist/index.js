"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var PORT = process.env.PORT || 5000;
app.get("/", function (req, res) {
  res.send("Hello from Express!");
});
app.listen(PORT, function () {
  console.log("Server is up on port " + PORT);
});