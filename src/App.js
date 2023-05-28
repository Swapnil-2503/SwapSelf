import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    initializeTasksAndPoints();
  }, []);

  const initializeTasksAndPoints = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const storedDay = localStorage.getItem('currentDay');

    // Reset tasks and points if it's a new day or no tasks are stored
    if (!storedDay || storedDay !== currentDay.toString()) {
      generateTasks();
      setPoints(0);
    } else {
      // Retrieve tasks and points from local storage
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      const storedPoints = parseInt(localStorage.getItem('points'));

      setTasks(storedTasks);
      setPoints(storedPoints);
    }

    // Store the current day
    localStorage.setItem('currentDay', currentDay.toString());
  };

  const generateTasks = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();

    let newTasks = [];

    switch (currentDay) {
      case 1:
        newTasks = [
          { id: 1, title: '30 Normal Push-ups', description: 'Perform 30 normal push-ups 2 reps', points: 10, completed: false },
          { id: 2, title: '15 Diamond Push-ups', description: 'Perform 15 diamond push-ups 2 reps', points: 10, completed: false },
          { id: 3, title: '20 Wide Angle Push-ups', description: 'Perform 20 wide-angle push-ups 2 reps', points: 10, completed: false },
          { id: 4, title: 'Plank for 30 seconds', description: 'Hold a plank position for 30 seconds', points: 10, completed: false },
          { id: 5, title: 'Boxing Practice for Cardio', description: 'Do boxing practice for cardio', points: 10, completed: false },
          { id: 6, title: 'Jumping Jacks', description: 'Do jumping jacks', points: 10, completed: false }
        ];
        break;
      // Add cases for other days
      default:
        newTasks = [
          { id: 1, title: '30 Normal Push-ups', description: 'Perform 30 normal push-ups', points: 10, completed: false },
          { id: 2, title: '15 Diamond Push-ups', description: 'Perform 15 diamond push-ups', points: 10, completed: false },
          { id: 3, title: '20 Wide Angle Push-ups', description: 'Perform 20 wide-angle push-ups', points: 10, completed: false },
          { id: 4, title: 'Plank for 30 seconds', description: 'Hold a plank position for 30 seconds', points: 10, completed: false },
          { id: 5, title: 'Boxing Practice for Cardio', description: 'Do boxing practice for cardio', points: 10, completed: false },
          { id: 6, title: 'Jumping Jacks', description: 'Do jumping jacks', points: 10, completed: false }
        ];
        break;
    }

    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const handleTaskComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: true
        };
      }
      return task;
    });

    const updatedPoints = calculatePoints(updatedTasks);
    setPoints(updatedPoints);
    setTasks(updatedTasks);

    // Store the updated tasks and points in local storage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    localStorage.setItem('points', updatedPoints.toString());
  };

  const calculatePoints = (updatedTasks) => {
    let totalPoints = 0;
    updatedTasks.forEach((task) => {
      if (task.completed) {
        totalPoints += task.points;
      }
    });
    return totalPoints;
  };

  const areAllTasksCompleted = tasks.every((task) => task.completed);

  return (
    <div>
      <h1>Daily Tasks</h1>
      <h2>Points: {points}</h2>
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onTaskComplete={handleTaskComplete} />
      ) : (
        <p>Loading tasks...</p>
      )}
      {areAllTasksCompleted && tasks.length > 0 && (
        <p>Congratulations! You have completed all tasks for today.</p>
      )}
    </div>
  );
}

export default App;
