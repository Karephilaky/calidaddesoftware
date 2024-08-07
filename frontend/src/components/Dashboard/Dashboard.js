import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import TaskForm from '../Tasks/TaskForm';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [showTaskForm, setShowTaskForm] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const [selectedTasks, setSelectedTasks] = useState([]);
    const [filterStatus, setFilterStatus] = useState('all'); // Nuevo estado para el filtro
    const toast = useRef(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/tasks'); // URL actualizada
                setTasks(res.data);
                setFilteredTasks(res.data); // Inicializa filteredTasks
            } catch (error) {
                toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to fetch tasks', life: 3000 });
            }
        };
        fetchTasks();
    }, []);

    useEffect(() => {
        // Filtra las tareas en función del estado seleccionado
        if (filterStatus === 'completed') {
            setFilteredTasks(tasks.filter(task => task.completed));
        } else if (filterStatus === 'pending') {
            setFilteredTasks(tasks.filter(task => !task.completed));
        } else {
            setFilteredTasks(tasks);
        }
    }, [tasks, filterStatus]);

    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">Manage Tasks</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
            <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="p-dropdown"
            >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
            </select>
        </div>
    );

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button 
                    label="New" 
                    icon="pi pi-plus" 
                    className="p-button-success mr-2" 
                    onClick={() => {
                        setCurrentTask(null); // No estamos editando una tarea
                        setShowTaskForm(true); // Mostrar formulario
                    }} 
                />
                <Button 
                    label="Delete" 
                    icon="pi pi-trash" 
                    className="p-button-danger" 
                    onClick={async () => {
                        if (selectedTasks.length) {
                            try {
                                await Promise.all(selectedTasks.map(task => axios.delete(`http://localhost:5000/api/tasks/${task.id}`))); // URL actualizada
                                setTasks(tasks.filter(task => !selectedTasks.includes(task)));
                                setSelectedTasks([]); // Limpiar selección después de eliminar
                                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Tasks deleted', life: 3000 });
                            } catch (error) {
                                toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to delete tasks', life: 3000 });
                            }
                        } else {
                            toast.current.show({ severity: 'warn', summary: 'Warning', detail: 'No tasks selected', life: 3000 });
                        }
                    }} 
                />
            </React.Fragment>
        );
    };

    const handleSave = (savedTask) => {
        if (currentTask) {
            setTasks(tasks.map(task => (task.id === savedTask.id ? savedTask : task)));
        } else {
            setTasks([...tasks, savedTask]);
        }
        setShowTaskForm(false);
    };

    const handleEdit = (task) => {
        setCurrentTask(task);
        setShowTaskForm(true);
    };

    return (
        <div className="datatable-crud-demo">
            <Toast ref={toast} />
            <Toolbar className="mb-4" left={leftToolbarTemplate}></Toolbar>
            {showTaskForm && <TaskForm task={currentTask} onSave={handleSave} />}
            <Card title="Dashboard">
                <DataTable
                    value={filteredTasks} // Usa filteredTasks en lugar de tasks
                    paginator
                    rows={10}
                    dataKey="id"
                    globalFilter={globalFilter}
                    header={header}
                    emptyMessage="No tasks found."
                    responsiveLayout="scroll"
                    selectionMode="checkbox" // Para seleccionar tareas
                    selection={selectedTasks}
                    onSelectionChange={e => setSelectedTasks(e.value)}
                >
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                    <Column field="title" header="Title" sortable></Column>
                    <Column field="description" header="Description" sortable></Column>
                    <Column field="priority" header="Priority" sortable></Column>
                    <Column field="due_date" header="Due Date" sortable></Column>
                    <Column field="completed" header="Completed" sortable></Column>
                    <Column
                        body={(rowData) => (
                            <Button label="Edit" icon="pi pi-pencil" className="p-button-warning" onClick={() => handleEdit(rowData)} />
                        )}
                    />
                </DataTable>
            </Card>
        </div>
    );
};

export default Dashboard;
