import styles from "./TaskList.module.css";
import TaskCard from "../TaskCard";
import NoTasksImage from "../../assets/NoTasksImage.png";

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
      {tasks.length === 0 && (
        <div className={styles.noTasksContainer}>
          <div className={styles.messageContainer}>
            <h2 className={styles.messageText}>Nada rolando por aqui...</h2>
            <h2 className={styles.messageText}>
              Que tal adicionar uma tarefa?
            </h2>
          </div>
          <img src={NoTasksImage} className={styles.noTasksImage} />
        </div>
      )}
    </section>
  );
};

export default TaskList;
