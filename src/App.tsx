import { Component, createEffect, createSignal, For } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { Input } from "./components/Input";
import { Task, todoStore } from "./components/state";
import ToDoItem from "./components/ToDoItem";

const App: Component = () => {
  const [tasks, setTasks] = createSignal<Task[]>([]);

  createEffect(() => {
    todoStore.subscribe(setTasks);
    todoStore.init();
  });

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <h2>To do list</h2>
        <h5>RxJS</h5>
        <div>
          <Input />
          <ul>
            <For each={tasks()}>{(task) => <ToDoItem task={task} />}</For>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default App;
