import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Info from './Info';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    initializeTasksAndPoints();
  }, []);

  useEffect(() => {
    calculateLevel();
  }, [points]);

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
          { id: 1, title: 'Practice deep breathing exercises for 5 minutes', description: 'Engage in deep breathing exercises to calm your mind and body', points: 10, completed: false },
          { id: 2, title: 'Write down three things you are grateful for', description: 'Reflect on the things you are grateful for in your life', points: 10, completed: false },
          { id: 3, title: 'Engage in a small social interaction', description: 'Initiate a conversation with a colleague or classmate', points: 10, completed: false },
          { id: 4, title: 'Challenge yourself to initiate a conversation with a stranger', description: 'Step out of your comfort zone and start a conversation with someone you don\'t know', points: 10, completed: false },
          { id: 5, title: 'Practice positive affirmations for 5 minutes', description: 'Repeat positive affirmations to boost your self-confidence', points: 10, completed: false },
          { id: 6, title: 'Write a journal entry about a positive experience', description: 'Reflect on a positive experience you had during the day and write about it', points: 10, completed: false }
        ];
        break;
      case 2:
        newTasks = [
          { id: 1, title: 'Engage in power poses for 5 minutes', description: 'Strike powerful and confident poses to boost your self-assurance', points: 10, completed: false },
          { id: 2, title: 'Attend a social event or group activity', description: 'Participate in a social event or join a group activity to interact with others', points: 10, completed: false },
          { id: 3, title: 'Take a public speaking or communication skills class', description: 'Enroll in a class or course to improve your public speaking and communication abilities', points: 10, completed: false },
          { id: 4, title: 'Volunteer for a presentation or speaking opportunity', description: 'Offer to present or speak in a volunteer setting to practice your communication skills', points: 10, completed: false },
          { id: 5, title: 'Start a conversation with someone you admire', description: 'Initiate a conversation with someone you look up to or admire', points: 10, completed: false },
          { id: 6, title: 'Join a club or organization related to your interests', description: 'Become a member of a club or organization that aligns with your interests', points: 10, completed: false }
        ];
        break;
      case 3:
        newTasks = [
          { id: 1, title: 'Share your opinions in a group discussion or meeting', description: 'Participate actively in a group discussion or meeting by sharing your thoughts and opinions', points: 10, completed: false },
          { id: 2, title: 'Attend a networking event and introduce yourself to new people', description: 'Attend a networking event and make an effort to introduce yourself to new individuals', points: 10, completed: false },
          { id: 3, title: 'Take on a leadership role in a project or team', description: 'Assume a leadership position in a project or team to develop your leadership skills', points: 10, completed: false },
          { id: 4, title: 'Practice active listening in conversations', description: 'Engage in active listening techniques during conversations to show attentiveness and understanding', points: 10, completed: false },
          { id: 5, title: 'Offer help or support to someone in need', description: 'Extend a helping hand or offer support to someone who could benefit from your assistance', points: 10, completed: false },
          { id: 6, title: 'Attend a workshop or seminar on a topic of interest', description: 'Participate in a workshop or seminar that covers a topic you find interesting', points: 10, completed: false }
        ];
        break;
      case 4:
        newTasks = [
          { id: 1, title: 'Share your expertise or knowledge with others', description: 'Share your expertise or knowledge on a subject with others', points: 10, completed: false },
          { id: 2, title: 'Engage in a physical activity or sport that boosts your confidence', description: 'Participate in a physical activity or sport that boosts your confidence and self-esteem', points: 10, completed: false },
          { id: 3, title: 'Attend a social gathering and engage in conversations with different individuals', description: 'Attend a social gathering and make an effort to have conversations with different individuals', points: 10, completed: false },
          { id: 4, title: 'Take a class or course to enhance a skill or learn something new', description: 'Enroll in a class or course to improve a specific skill or learn something new', points: 10, completed: false },
          { id: 5, title: 'Give a compliment to someone you interact with', description: 'Offer a genuine compliment to someone you interact with', points: 10, completed: false },
          { id: 6, title: 'Practice assertiveness by expressing your needs and boundaries', description: 'Practice assertiveness by clearly expressing your needs and setting personal boundaries', points: 10, completed: false }
        ];
        break;
      case 5:
        newTasks = [
          { id: 1, title: 'Participate in a debate or discussion group', description: 'Engage in a debate or discussion group to express and defend your opinions', points: 10, completed: false },
          { id: 2, title: 'Take on a challenging task or project and see it through to completion', description: 'Choose a challenging task or project and work on it until it is successfully completed', points: 10, completed: false },
          { id: 3, title: 'Engage in self-reflection and identify areas of personal growth', description: 'Reflect on yourself and identify areas where you can grow and improve', points: 10, completed: false },
          { id: 4, title: 'Attend a public speaking event or TED talk', description: 'Attend a public speaking event or watch a TED talk to gain inspiration and insights', points: 10, completed: false },
          { id: 5, title: 'Practice mindfulness or meditation to calm your mind and reduce anxiety', description: 'Engage in mindfulness or meditation practices to promote calmness and reduce anxiety', points: 10, completed: false },
          { id: 6, title: 'Share your ideas or opinions in a team meeting', description: 'Confidently share your ideas or opinions during a team meeting', points: 10, completed: false }
        ];
        break;
      case 6:
        newTasks = [
          { id: 1, title: 'Participate in a group activity that requires teamwork', description: 'Engage in a group activity that promotes teamwork and collaboration', points: 10, completed: false },
          { id: 2, title: 'Attend a social event where you can meet new people', description: 'Attend a social event or gathering where you have the opportunity to meet new people', points: 10, completed: false },
          { id: 3, title: 'Seek feedback from others and embrace constructive criticism', description: 'Ask for feedback from others and be open to constructive criticism for personal growth', points: 10, completed: false },
          { id: 4, title: 'Present a topic or share a story with a small group', description: 'Prepare and present a topic or share a personal story with a small group of people', points: 10, completed: false },
          { id: 5, title: 'Engage in a hobby or activity that brings you joy and boosts your confidence', description: 'Spend time on a hobby or activity that brings you joy and boosts your confidence', points: 10, completed: false },
          { id: 6, title: 'Take on a leadership role in a volunteer organization or community project', description: 'Assume a leadership role in a volunteer organization or community project to develop your leadership skills', points: 10, completed: false }
        ];
        break;
      case 7:
        newTasks = [
          { id: 1, title: 'Practice making eye contact and maintaining good body language in conversations', description: 'Practice maintaining eye contact and displaying positive body language during conversations', points: 10, completed: false },
          { id: 2, title: 'Share your achievements or accomplishments with others', description: 'Confidently share your achievements or accomplishments with others', points: 10, completed: false },
          { id: 3, title: 'Join an online community or forum and actively participate in discussions', description: 'Become a member of an online community or forum and engage in meaningful discussions', points: 10, completed: false },
          { id: 4, title: 'Engage in positive self-talk throughout the day', description: 'Practice positive self-talk to boost your confidence and self-belief', points: 10, completed: false },
          { id: 5, title: 'Attend a workshop on public speaking or communication skills', description: 'Participate in a workshop or training session focused on public speaking or communication skills', points: 10, completed: false },
          { id: 6, title: 'Celebrate your progress and reward yourself for your efforts', description: 'Acknowledge and celebrate your progress in overcoming social anxiety and reward yourself for your efforts', points: 10, completed: false }
        ];
        break;
      default:
        newTasks = [ { id: 1, title: 'Practice making eye contact and maintaining good body language in conversations', description: 'Practice maintaining eye contact and displaying positive body language during conversations', points: 10, completed: false },
        { id: 2, title: 'Share your achievements or accomplishments with others', description: 'Confidently share your achievements or accomplishments with others', points: 10, completed: false },
        { id: 3, title: 'Join an online community or forum and actively participate in discussions', description: 'Become a member of an online community or forum and engage in meaningful discussions', points: 10, completed: false },
        { id: 4, title: 'Engage in positive self-talk throughout the day', description: 'Practice positive self-talk to boost your confidence and self-belief', points: 10, completed: false },
        { id: 5, title: 'Attend a workshop on public speaking or communication skills', description: 'Participate in a workshop or training session focused on public speaking or communication skills', points: 10, completed: false },
        { id: 6, title: 'Celebrate your progress and reward yourself for your efforts', description: 'Acknowledge and celebrate your progress in overcoming social anxiety and reward yourself for your efforts', points: 10, completed: false }
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

  const calculateLevel = () => {
    const level = Math.floor(points / 60); // Convert points to levels (1 level = 60 points)
    setLevel(level);
  };

  const areAllTasksCompleted = tasks.every((task) => task.completed);

  return (
    <div className='App'>
      <Router>
        <h1>SwapSelf</h1>
        <h2>Points - {points}</h2>
        <h2>Level - {level}</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Tasks</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<TaskList tasks={tasks} onTaskComplete={handleTaskComplete} />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
