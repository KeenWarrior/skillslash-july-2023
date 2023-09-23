const express = require('express');
const User = require('./user.model');

const app = express();
app.use(express.json()); // for parsing application/json

app.get('/users', (req, res) => {
    const users = User.findAll();
    res.send(users);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = User.findById(id);
    res.send(user);
});

app.post('/users', (req, res) => {
    const user = req.body;
    const createdUser = User.create(user);
    res.send(createdUser);
});

app.patch('/users/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    const latest = User.updateById(id, updates);
    res.send(latest);
});


app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = User.deleteById(id);
    res.send(user);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
