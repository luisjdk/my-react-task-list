import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Comprar leche", done: false },
    { id: 2, name: "Sacar al perro", done: true },
    { id: 3, name: "Hacer ejercicio", done: false },
  ]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, name: newTask, done: false }]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleToggleDone = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div>
      <Header />
      <TaskList
        tasks={tasks}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onToggleDone={handleToggleDone}
      />
    </div>
  );
};

export default App;
