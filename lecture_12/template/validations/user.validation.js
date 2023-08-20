const Joi = require("joi");

const createUser = Joi.object({
  username: Joi.string().required().min(3).max(30),
  password: Joi.string()
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9]{6,10}$"))
    .messages({
      "string.pattern.base":
        "Password must be 6-10 characters long and contain only alphanumeric characters",
    }),
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  avatar: Joi.string().default(
    "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
  ),
  role: Joi.string().valid("user", "admin"),
});

module.exports = {
  createUser,
};
