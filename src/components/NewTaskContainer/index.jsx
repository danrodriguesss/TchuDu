import { useState } from "react";
import { PiPlus } from "react-icons/pi";
import Button from "../Button";
import Input from "../Input";

import styles from "./NewTaskContainer.module.css";

const NewTaskContainer = ({ addCreatedTask }) => {
  const [taskContent, setTaskContent] = useState("");

  const handleCreateTask = () => {
    if (!taskContent.trim()) return;

    const newTask = {
      id: crypto.randomUUID(),
      content: taskContent,
      done: false,
    };

    addCreatedTask(newTask);

    setTaskContent("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleCreateTask();
  };

  return (
    <div className={styles.container}>
      <Input
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
        placeholder="Adicione uma nova tarefa para hoje..."
      />
      <Button label="Adicionar" icon={PiPlus} onClick={handleCreateTask} />
    </div>
  );
};

export default NewTaskContainer;
