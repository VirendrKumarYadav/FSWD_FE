import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import '../css/style.css'; 

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    axios.defaults.baseURL = 'https://fswd-be.onrender.com/api/v1/mail';
    
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('/'); 
                setTasks(response.data.listOfScheduled);
            } catch (error) {
                setError('Error fetching tasks');
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="task-list-container">
            <h2 className="section-title">Scheduled Tasks</h2>
            <ul className="task-list">
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;