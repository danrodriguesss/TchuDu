import { useState, useEffect } from "react";
import styles from "./App.module.css";
import SideBar from "./components/SideBar";
import Greetings from "./components/Greetings";
import NewTaskContainer from "./components/NewTaskContainer";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addCreatedTask = (newTask) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const onDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const onTaskDone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task,
      ),
    );
  };

  return (
    <main className={styles.container}>
      <SideBar />
      <section className={styles.managerContainer}>
        <Greetings />
        <NewTaskContainer addCreatedTask={addCreatedTask} />
        <TaskList tasks={tasks} onDelete={onDelete} onTaskDone={onTaskDone} />
      </section>
    </main>
  );
}

export default App;
