function toJSON (schema, options) {
  schema.options.toJSON = {
    transform: function (doc, ret) {

      // remove private fields
      delete ret.password;

      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  };
}

module.exports = toJSON;
