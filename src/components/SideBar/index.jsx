import { PiCheckFat } from "react-icons/pi";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <PiCheckFat size={40} color={{ color: "inherit" }} />
          <h1 className={styles.logoName}>TchuDu!</h1>
        </div>
      </header>
    </aside>
  );
};

export default SideBar;
