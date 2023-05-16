import React, { useState } from "react";
import Task from "./Task";

const TaskList = ({ tasks, onAddTask, onDeleteTask, onToggleDone }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleAddTask = (event) => {
    event.preventDefault();
    onAddTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTaskName}
          onChange={(event) => setNewTaskName(event.target.value)}
        />
        <button type="submit">+</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleDone={onToggleDone}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
