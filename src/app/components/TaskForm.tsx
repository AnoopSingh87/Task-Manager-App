import React, { useState, useEffect } from 'react';
import { Task } from '../types/task';

interface TaskFormProps {
  addTask: (task: Task) => void;
  editTask?: (task: Task) => void;
  existingTask?: Task | null;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask, editTask, existingTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('medium');

  useEffect(() => {
    if (existingTask) {
      setTitle(existingTask.title);
      setDescription(existingTask.description);
      setPriority(existingTask.priority);
    } else {
      setTitle('');
      setDescription('');
      setPriority('medium');
    }
  }, [existingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (existingTask && editTask) {
      editTask({ ...existingTask, title, description, priority });
    } else {
      const newTask: Task = {
        id: Date.now(),
        title,
        description,
        priority,
        completed: false,
      };
      addTask(newTask);
    }
    setTitle('');
    setDescription('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
        className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        required
        className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as 'high' | 'medium' | 'low')}
        className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-700 transition"
      >
        {existingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
