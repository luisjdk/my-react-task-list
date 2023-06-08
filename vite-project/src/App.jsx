import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import useTaskManagement from "./components/useTaskManagement";

const App = () => {
  const { tasks, addTask, deleteTask, toggleDone } = useTaskManagement();

  return (
    <div>
      <Header />
      <TaskList
        tasks={tasks}
        onAddTask={addTask}
        onDeleteTask={deleteTask}
        onToggleDone={toggleDone}
      />
    </div>
  );
};

export default App;
