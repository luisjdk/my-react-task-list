import React from "react";

const Task = ({ task, onDeleteTask, onToggleDone }) => {
  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  const handleToggleDone = () => {
    onToggleDone(task.id);
  };

  return (
    <li>
      <input type="checkbox" checked={task.done} onChange={handleToggleDone} />
      {task.name}
      <button onClick={handleDeleteTask}>Eliminar</button>
    </li>
  );
};

export default Task;
