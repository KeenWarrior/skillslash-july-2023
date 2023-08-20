const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const passport = require('passport');
const jwtStrategy = require('./config/passport');

const app = express();

app.use(cors());
app.use(express.json());

app.use(passport.initialize());

passport.use('jwt', jwtStrategy);

app.use('/api', routes);


module.exports = app;