import React from 'react';
import axios from 'axios';

const TaskItem = ({ task }) => {
    axios.defaults.baseURL = 'http://localhost:10000/api/v1/mail';
    const handleStop = async () => {
        try {
            await axios.patch('/stop', { displayName: task.displayName });
            alert('Task stopped successfully');
            window.location.reload(); // Refresh to see updated status
        } catch (error) {
            alert('Error stopping task: ' + error.message);
        }
    };

    const handleRestart = async () => {
        try {
            await axios.patch('/restart', { displayName: task.displayName });
            alert('Task restarted successfully');
            window.location.reload(); // Refresh to see updated status
        } catch (error) {
            alert('Error restarting task: ' + error.message);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete('/remove', { data: { displayName: task.displayName } });
            alert('Task deleted successfully');
            window.location.reload(); // Refresh to see updated status
        } catch (error) {
            alert('Error deleting task: ' + error.message);
        }
    };

    return (
        <li className="task-item">
            <h3>{task.displayName}</h3>
            <p>Schedule: {task.schedule}</p>
            <p>Status: {task.status}</p>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleRestart}>Restart</button>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default TaskItem;