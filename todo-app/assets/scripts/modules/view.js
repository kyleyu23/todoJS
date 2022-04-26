import {
  editIcon,
  deleteIcon,
  arrowRIcon,
  arrowLIcon,
} from "../helpers/constant.js";

/* ~~~~~~~~~ View Module ~~~~~~~~~ */
export const View = (() => {
  const domstr = {
    pendingTasks: ".tasks-pending__container",
    completedTasks: ".tasks-completed__container",
    tasklist: ".tasklist",
    taskForm: "task-form",
    inputbox: "new-task-input",
    task: ".task__name",
    tasktext: ".task__name-text",
    taskinput: ".task__name-edit",
  };
  const render = (ele, tmp) => {
    ele.innerHTML = tmp;
  };
  const createTmp = (arr) => {
    let tmp = "";
    arr.forEach((todo) => {
      const { content: taskName, isCompleted, id } = todo;
      if (!isCompleted) {
        tmp += `
                <article class="task">
                    <div class="task__name">
                        <p class="task__name-text text${id}">${taskName}</p>
                        <input class="task__name-edit input${id}" type="text" placeholder="text"/>
                    </div>
                    <div class="task__icons">
                        <button type="button" class="edit-task ${id}">${editIcon} </button>
                        <button type="button" class="delete-task ${id}">${deleteIcon}</button>
                        <button type="button" class="arrow move-right ${id}">${arrowRIcon}</button>
                    </div>
                </article>
            `;
      }
      if (isCompleted) {
        tmp += `
                <article class="task ${id}">
                    <div class="task__icons">
                        <button class="arrow move-left ${id}">${arrowLIcon}</button>
                    </div>
                    <div class="task__name">
                        <p class="task__name-text text${id}">${taskName}</p>
                        <input class="task__name-edit input${id}" type="text" placeholder="text"/>
                    </div>
                    <div class="task__icons">
                        <button type="button" class="edit-task ${id}">${editIcon} </button>
                        <button type="button" class="delete-task ${id}">${deleteIcon}</button>
                    </div>
                </article>
            `;
      }
    });
    return tmp;
  };

  return { domstr, createTmp, render };
})();
