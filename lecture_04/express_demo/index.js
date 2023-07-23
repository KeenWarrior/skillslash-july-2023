const express = require('express');
const cors = require('cors');
const User = require('./user.model');

const { sequelize } = require('./sequelize');

const PORT = 5000;

const app = express();

app.use(cors());

app.use(express.json()); 

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
});

app.get('/users/:id', async (req, res) => {
    const id = +req.params.id;
    const user = await User.findByPk(id);
    res.send(user);
});

app.post('/users', async (req, res) => {
    const user = req.body;
    const createdUser = await User.create(user);
    res.send(createdUser);
});

app.patch('/users/:id', async (req, res) => {
    const id = +req.params.id;
    const updates = req.body;
    const latest = await User.update(updates, {where: {id: id}});
    res.send(latest);
});


app.delete('/users/:id', (req, res) => {
    const id = +req.params.id;
    const user = User.destroy({where: {id: id}});
    res.send(user);
});

sequelize.sync().then(() => {
    console.log('Database synced');
});

app.listen(PORT, () => {
    console.log('Server started on port '+PORT);
});
