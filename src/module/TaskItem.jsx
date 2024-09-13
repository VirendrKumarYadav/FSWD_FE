import React from 'react';
import axios from 'axios';
import '../css/style.css'; 

const TaskItem = ({ task }) => {
    axios.defaults.baseURL = 'https://fswd-be.onrender.com/api/v1/mail';
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
            <h3 className="task-name">{task.displayName}</h3>
            <p className="task-info">Schedule: {task.schedule}</p>
            <p className="task-info">Status: {task.status}</p>
            <div className="task-actions">
                <button onClick={handleStop} className="action-button">Stop</button>
                <button onClick={handleRestart} className="action-button">Restart</button>
                <button onClick={handleDelete} className="action-button">Delete</button>
            </div>
        </li>
    );
};

export default TaskItem;