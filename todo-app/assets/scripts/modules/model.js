import { Api } from "./api.js";
import { View } from "./view.js";

/* ~~~~~~~~~ Model Module ~~~~~~~~~ */
export const Model = ((api, view) => {
  class Todo {
    constructor(content) {
      this.content = content;
      this.isCompleted = false;
    }
  }

  class State {
    #todolistPending = [];
    #todolistCompleted = [];
    isEditing = false;

    get todolistPending() {
      return this.#todolistPending;
    }
    set todolistPending(newtodolist) {
      this.#todolistPending = [...newtodolist];
      const todolistEle = document.querySelector(view.domstr.pendingTasks);
      const tmp = view.createTmp(this.todolistPending);
      view.render(todolistEle, tmp);
    }

    get todolistCompleted() {
      return this.#todolistCompleted;
    }
    set todolistCompleted(newtodolist) {
      this.#todolistCompleted = [...newtodolist];
      const todolistEle = document.querySelector(view.domstr.completedTasks);
      const tmp = view.createTmp(this.#todolistCompleted);
      view.render(todolistEle, tmp);
    }
  }

  const getTodos = api.getTodos;
  const deleteTodo = api.deleteTodo;
  const addTodo = api.addTodo;
  const editTodo = api.editTodo;
  return {
    getTodos,
    deleteTodo,
    addTodo,
    editTodo,
    Todo,
    State,
  };
})(Api, View);
