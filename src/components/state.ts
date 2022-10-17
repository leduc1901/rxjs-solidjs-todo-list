import { Subject } from "rxjs";
import { uid } from "../utils/uid";

export type Task = {
  id: string;
  content: string;
  isDone: boolean;
};

const subject = new Subject();

const initialState: Task[] = [];

let state = initialState;

export const todoStore = {
  init: () => {
    subject.next(state);
  },
  subscribe: (setState: any) => {
    subject.subscribe(setState);
  },
  addTask: (content: string) => {
    const task = {
      content,
      id: uid(),
      isDone: false,
    };
    state = [...state, task];
    subject.next(state);
  },
  removeTask: (id: string) => {
    const tasks = state.filter((task) => task.id !== id);
    state = tasks;
    subject.next(state);
  },
  completeTask: (id: string) => {
    const tasks = state.map((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }
      return task;
    });
    state = tasks;
    subject.next(state);
  },
  initialState,
};
