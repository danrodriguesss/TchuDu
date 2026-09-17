import styles from "./Greetings.module.css";
import { PiMoon, PiSun } from "react-icons/pi";
import Button from "../Button";

const Greetings = ({ theme, toggleTheme }) => {
  const themeButtonIcon = theme === "light" ? PiMoon : PiSun;
  const verifyDayHour = () => {
    const hour = new Date().getHours();

    if (hour < 6) return "Boa madrugada!";
    if (hour < 12) return "Bom dia!";
    if (hour < 18) return "Boa tarde!";

    return "Boa noite!";
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.greeting}>{verifyDayHour()}</h1>
        <p className={styles.subtitle}>Aqui estão suas tarefas de hoje.</p>
      </div>
      <div>
        <Button iconOnly variant="outlined" icon={themeButtonIcon} onClick={toggleTheme} />
      </div>
    </div>
  );
};

export default Greetings;
