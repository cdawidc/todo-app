const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, text: 'Naucz się React', done: false }
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = { ...req.body, id: Date.now() };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(5005, () => {
  console.log('Backend działa na porcie 5005');
});