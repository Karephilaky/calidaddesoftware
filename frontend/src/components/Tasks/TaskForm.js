import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Toast } from 'primereact/toast';

const TaskForm = ({ task }) => {
    const [title, setTitle] = useState(task ? task.title : '');
    const [description, setDescription] = useState(task ? task.description : '');
    const [priority, setPriority] = useState(task ? task.priority : '');
    const [dueDate, setDueDate] = useState(task ? task.due_date.split('T')[0] : ''); // Mostrar solo la fecha
    const toast = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!title || !description || !priority || !dueDate) {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'All fields are required', life: 3000 });
            return;
        }

        try {
            const response = task
                ? await axios.put(`http://localhost:5000/api/tasks/${task.id}`, {
                      title,
                      description,
                      priority,
                      due_date: dueDate
                  })
                : await axios.post('http://localhost:5000/api/tasks', {
                      title,
                      description,
                      priority,
                      due_date: dueDate
                  });
            console.log('Task saved:', response.data);
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Task saved successfully' });
        } catch (error) {
            console.error('Error saving task:', error);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to save task' });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Toast ref={toast} />
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Title" 
                required 
            />
            <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Description" 
                required 
            />
            <input 
                type="text" 
                value={priority} 
                onChange={(e) => setPriority(e.target.value)} 
                placeholder="Priority" 
                required 
            />
            <input 
                type="date" 
                value={dueDate} 
                onChange={(e) => setDueDate(e.target.value)} 
                placeholder="Due Date" 
                required 
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default TaskForm;
