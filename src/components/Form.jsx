import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../css modules/form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function hanldeSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form onSubmit={(e) => hanldeSubmit(e)} className={styles.todoform}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          placeholder="Enter todo item..."
        />
        <button type="submit" className={styles.addbutton}>
          Add
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  setTodos: PropTypes.func.isRequired,
};
Form.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired,
};
