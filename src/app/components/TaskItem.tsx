// src/components/TaskItem.tsx
import React from 'react';
import { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleComplete, deleteTask, editTask }) => {
  return (
    <div className={`border rounded p-4 mb-2 ${task.completed ? 'bg-gray-200' : 'bg-white'}`}>
      <h2 className={`font-bold ${task.completed ? 'line-through' : ''}`}>{task.title}</h2>
      <p>{task.description}</p>
      <p className={`font-bold ${task.priority === 'high' ? 'text-red-500' : task.priority === 'medium' ? 'text-yellow-500' : 'text-green-500'}`}>
        {task.priority}
      </p>
      <button onClick={() => toggleComplete(task.id)} className="mr-2 text-blue-500">
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => editTask(task)} className="mr-2 text-green-500">
        Edit
      </button>
      <button onClick={() => deleteTask(task.id)} className="text-red-500">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
