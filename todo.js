let todo_wrapper = document.querySelector(".todo-wrapper");

/**
 * Global Todo List array store
 */
let TODO_ITEMS = [
  {
    completed: false,
    todo: "Watching money heist",
  },
  {
    completed: false,
    todo: "Learn Javascript",
  },
];


//Todo view wrapper for an item

const todoView = (todo, id) => {
  return `<li class="todo-item">
                <div class="todo ${todo.completed ? "completed" : ""}" >
                    ${todo.todo}
                </div>
                <div class="todo-actions">
                    <span>
              <button type="button" onClick="onDeleteTodo(${id})" class="delete">
                Delete
              </button>
              <button type="button" class="complete" onClick="onMarkComplete(${id})">
                Complete
              </button>
            </span>
                </div>
            </li>`;
};

/**
 * Preivew all todos from the todo list to the ui
 */
const renderTodos = () => {
  var list = "";
  for (var index in TODO_ITEMS) {
    list += todoView(TODO_ITEMS[index], index);
  }

  todo_wrapper.innerHTML = list;
};

/**
 *  onDeleteTodo
 */
function onDeleteTodo(id) {
  var newList = [];
  for (var index in TODO_ITEMS) {
    if (index == id) {
      continue;
    }
    newList.push(TODO_ITEMS[index]);
  }
  TODO_ITEMS = newList;
  return renderTodos();
}

/**
 *  onDeleteTodo
 */
function onMarkComplete(id) {
 TODO_ITEMS[id].completed = !TODO_ITEMS[id].completed;
  return renderTodos();
}

function addTodo(e){
  var input = document.querySelector("#new-todo");
  var todo = {
    completed: false,
    todo: input.value
  }
 
  var newList = [todo]
  for(var index in TODO_ITEMS){
    newList.push(TODO_ITEMS[index])
  }

  TODO_ITEMS = newList;
  return renderTodos() // this method updates the ui
}


renderTodos(); 