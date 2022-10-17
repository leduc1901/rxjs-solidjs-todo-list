import { Component, createSignal } from "solid-js";
import { todoStore } from "./state";

export const Input: Component = () => {
  const [taskContent, setTaskContent] = createSignal("");

  const submitTask = () => {
    if (taskContent() != "") {
      todoStore.addTask(taskContent());
      setTaskContent("");
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setTaskContent(e.currentTarget.value)}
        placeholder="Enter a task"
        value={taskContent()}
      />
      <button onClick={submitTask}>Submit</button>
    </div>
  );
};
