// TaskList.js
import React from 'react';

function TaskList({ tasks, onTaskComplete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          {task.completed ? (
            <span>Completed</span>
          ) : (
            <button onClick={() => onTaskComplete(task.id)}>Complete</button>
          )}
          <span>Points: {task.points}</span>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

