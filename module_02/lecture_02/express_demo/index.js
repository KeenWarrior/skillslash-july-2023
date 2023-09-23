const express = require('express');
const fs = require('fs');

const content = fs.readFileSync('./users.json', 'utf-8');
const users = JSON.parse(content);

const app = express();
app.use(express.json()); // for parsing application/json

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.send(users[id]);
});

app.post('/users', (req, res) => {
    const user = req.body;
    users[user.name] = user;
    fs.writeFileSync('./users.json', JSON.stringify(users));
    res.send(user);
});

app.patch('/users/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    const old = users[id];
    const latest = {...old, ...updates};

    users[id] = latest;
    fs.writeFileSync('./users.json', JSON.stringify(users));
    res.send(latest);
});


app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    delete users[id];
    fs.writeFileSync('./users.json', JSON.stringify(users));
    res.send(user);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
