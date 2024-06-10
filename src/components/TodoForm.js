import styles from "./todoform.module.css";
export default function TodoForm({ todo, setTodo, todos, setTodos }) {
  function handleClick() {
    setTodos([...todos, { name: todo.name, task: todo.task, done: false }]);
    setTodo({ name: "", task: "" });
  }
  return (
    <>
      <div className={styles.formContainer}>
        <label className={styles.labelName}>
          Todo Name :
          <input
            className={styles.input}
            type="text"
            value={todo.name}
            onChange={(e) => {
              setTodo({ ...todo, name: e.target.value });
            }}
            placeholder="Enter Todo Name..."
          />
        </label>
        <label className={styles.labelName}>
          Todo Task :
          <input
            className={styles.input}
            type="text"
            value={todo.task}
            onChange={(e) => {
              setTodo({ ...todo, task: e.target.value });
            }}
            placeholder="Enter Todo Task..."
          />
        </label>
        <span className={styles.formBtnContainer}>
          <button className={styles.formBtn} onClick={handleClick}>
            Add
          </button>
        </span>
      </div>
    </>
  );
}
