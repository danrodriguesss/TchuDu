import styles from "./TaskList.module.css";
import TaskCard from "../TaskCard";

const TaskList = ({ tasks = [], onDelete, onTaskDone }) => {
  return (
    <section className={styles.container}>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          taskContent={task.content}
          isDone={task.done}
          onDelete={() => onDelete(task.id)}
          onTaskDone={() => onTaskDone(task.id)}
        />
      ))}
    </section>
  );
};

export default TaskList;
