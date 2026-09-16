import { useState } from "react";
import styles from "./App.module.css";
import SideBar from "./components/SideBar";
import Greetings from "./components/Greetings";
import NewTaskContainer from "./components/NewTaskContainer";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [],
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));

  const addCreatedTask = (newTask) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
    localStorage.setItem("tasks", JSON.stringify([newTask, ...tasks]));
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

  console.log(tasks);

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
