/* eslint-disable react/prop-types */
import styles from "../css modules/todolist.module.css";
import Todoitems from "./Todoitem";
export default function Todolist({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  const hide = todos.slice().length ? "" : styles.display;
  return (
    <div id={hide} className={styles.list}>
      {sortedTodos.map((item) => (
        <Todoitems
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
