import React from 'react';
import TaskList from './module/TaskList';
import AddTask from './module/AddTask';
import './App.css'; // Assuming you have some CSS for styling

const App = () => {
    return (
        <div className="app-container">
            <h1>Email Scheduler</h1>
            <AddTask />
            <TaskList />
        </div>
    );
};

export default App;