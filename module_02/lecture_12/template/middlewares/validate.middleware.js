function validate(schema) {
  return async (req, res, next) => {
    const body = req.body;
    const { error, value } = schema.validate(body, {
        abortEarly: false,
    });
    if (error) {
      res.status(400).send(error.message);
    } else {
      req.body = value;
      next();
    }
  };
}

module.exports = validate;
