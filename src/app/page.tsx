"use client";  // Add this at the top

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './types/task';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';  // Import Navbar
import Footer from './components/Footer';  // Import Footer

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const editTask = (task: Task) => {
    setEditingTask(task);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null);
  };

  const toggleComplete = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const sortedTasks = tasks
    .slice()
    .sort((a, b) => {
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      const priorityOrder = { high: 1, medium: 2, low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <Navbar />  {/* Add the Navbar component */}

      <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8">
        <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg max-w-4xl mt-10">
          <h1 className="text-4xl font-bold text-center mb-8">Task Manager</h1>

          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded p-2 w-full mb-4 focus:outline-none focus:ring focus:ring-purple-300 transition"
          />

          <TaskForm addTask={addTask} editTask={editingTask ? updateTask : undefined} existingTask={editingTask} />

          <TaskList
            tasks={sortedTasks}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </div>
      </div>

      <Footer />  {/* Add the Footer component */}
    </div>
  );
}
