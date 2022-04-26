/* ~~~~~~~~~ Api Module ~~~~~~~~~ */
export const Api = (() => {
  const baseURL = "http://localhost:3000";
  const ressourceURL = "todos";
  const getTodos = () =>
    fetch([baseURL, ressourceURL].join("/")).then((response) =>
      response.json()
    );

  const getTodo = (id) => {
    fetch([baseURL, ressourceURL, id].join("/")).then((response) =>
      response.json()
    );
  };
  const deleteTodo = (id) =>
    fetch([baseURL, ressourceURL, id].join("/"), {
      method: "DELETE",
    });

  const addTodo = (newtodo) => {
    fetch([baseURL, ressourceURL].join("/"), {
      method: "POST",
      body: JSON.stringify(newtodo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
  };

  const editTodo = (id, updatetodo) => {
    fetch([baseURL, ressourceURL, id].join("/"), {
      method: "PUT",
      body: JSON.stringify(updatetodo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
  };

  return { getTodos, getTodo, deleteTodo, addTodo, editTodo };
})();
