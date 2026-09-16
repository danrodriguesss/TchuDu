import { PiTrash } from "react-icons/pi";
import Button from "../Button";
import styles from "./TaskCard.module.css";

const TaskCard = ({ taskContent, isDone, onDelete, onTaskDone }) => {
  const textStyle = isDone ? styles.lineThrough : styles.taskText;

  return (
    <div className={styles.container}>
      <div className={styles.taskContent}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isDone}
          onChange={onTaskDone}
        />
        <p className={textStyle}>{taskContent}</p>
      </div>
      <Button iconOnly icon={PiTrash} variant="danger" onClick={onDelete} />
    </div>
  );
};

export default TaskCard;
