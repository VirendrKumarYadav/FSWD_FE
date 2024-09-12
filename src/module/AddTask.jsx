import React, { useState } from 'react';
import axios from 'axios';

const AddTask = () => {
    const [displayName, setDisplayName] = useState('');
    const [schedule, setSchedule] = useState('');
    const [message, setMessage] = useState('');
    const [to, setTo] = useState('');
    axios.defaults.baseURL = 'http://localhost:10000/api/v1/mail';
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/add-task', {
                displayName,
                schedule,
                message,
                to
            });
            alert('Task added successfully');
            // Reset form fields
            setDisplayName('');
            setSchedule('');
            setMessage('');
            setTo('');
        } catch (error) {
            alert('Error adding task: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <h2>Add New Task</h2>
            <input
                type="text"
                placeholder="Display Name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Schedule (cron format)"
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Recipient Email"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;