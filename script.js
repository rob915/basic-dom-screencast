const todos = document.querySelectorAll(".todo");
const newTodoButton = document.querySelector(".button_action_new-todo");
const clearTodosButton = document.querySelector(".button_action_clear-todos");
const todoList = document.querySelector(".todos");
const todoEditButtons = document.querySelectorAll(".todo__edit");

for (let i = 0; i < todos.length; i++) {
  const editButton = todoEditButtons[i];
  editButton.addEventListener("click", function () {
    const textElement = todos[i].querySelector(".todo__text");
    let newTodo = prompt("Change Todo?");
    textElement.textContent = newTodo;
  });
}

function addNewTodo() {
  todoList.innerHTML += `<li class="todo">
  <input class="todo__checkbox" type="checkbox" />
  <span class="todo__text"></span>
  <button type="button" class="todo__edit">Edit</button>
</li>`;
}

newTodoButton.addEventListener("click", addNewTodo);

function clearTodos() {
  console.log("clicked clear todo button");
}

clearTodosButton.addEventListener("click", clearTodos);
