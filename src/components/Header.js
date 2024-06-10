import styles from "./Header.module.css";
export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerName}>My Todo List</h1>
    </div>
  );
}
