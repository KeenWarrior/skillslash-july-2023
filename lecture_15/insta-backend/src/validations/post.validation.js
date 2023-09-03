const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createPost = {
  body: Joi.object().keys({
    imageSrc: Joi.string().required(),
    caption: Joi.string(),
    place: Joi.string(),
    mentions: Joi.array().items(Joi.string().custom(objectId)),
  }),
};

module.exports = {
    createPost
}