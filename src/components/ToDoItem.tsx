import { Task, todoStore } from "./state";
import styles from "../App.module.css";

type ToDoItemProps = {
  task: Task;
};

const ToDoItem = ({ task }: ToDoItemProps) => {
  const deleteTask = (id: string) => {
    todoStore.removeTask(id);
  };

  const completeTask = (id: string) => {
    todoStore.completeTask(id);
  };

  return (
    <li>
      <div class={styles.todoItem}>
        <input
          type="checkbox"
          onChange={() => completeTask(task.id)}
          checked={task.isDone}
        />
        <p>{task.content}</p>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
};

export default ToDoItem;
