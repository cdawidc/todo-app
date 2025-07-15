import React, { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');

  useEffect(() => {
    fetch('http://localhost:5005/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = () => {
    fetch('http://localhost:5005/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newTaskText, done: false }),
    })
      .then(res => res.json())
      .then(task => setTasks([...tasks, task]));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Moja lista zadań</h1>
      <input
        value={newTaskText}
        onChange={e => setNewTaskText(e.target.value)}
        placeholder="Nowe zadanie"
      />
      <button onClick={addTask}>Dodaj</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;