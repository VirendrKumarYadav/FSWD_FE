import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
axios.defaults.baseURL = 'http://localhost:10000/api/v1/mail';
const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    axios.defaults.baseURL = 'http://localhost:10000/api/v1/mail';
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
        <div>
            <h2>Scheduled Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;