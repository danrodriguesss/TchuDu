import styles from "./Greetings.module.css";

const Greetings = () => {
  const verifyDayHour = () => {
    const hour = new Date().getHours();

    if (hour < 6) return "Boa madrugada!";
    if (hour < 12) return "Bom dia!";
    if (hour < 18) return "Boa tarde!";

    return "Boa noite!";
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.greeting}>{verifyDayHour()}</h1>
      <p className={styles.subtitle}>Aqui estão suas tarefas de hoje.</p>
    </div>
  );
};

export default Greetings;
