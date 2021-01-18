<script>
  import TodoForm from "./components/TodoForm.svelte";
  import TodoList from "./components/TodoList.svelte";

  const setLocalStorage = (todos) => localStorage.setItem('todos', JSON.stringify(todos));
  const getLocalStorage = () => JSON.parse(localStorage.getItem('todos'));
  
  const getTodos = getLocalStorage();
  let todos = getTodos ? getTodos : [];
  let last = todos[todos.length - 1];
  let id = !last ? 0 : last.id + 1;
  
  const handleSaveInput = () => {
    const input = document.getElementById('todo');
    if(!input.value) return;
    const newTodo = {
      id: id++,
      todo: input.value,
      checked: false
    }
    todos = [...todos, newTodo];
    setLocalStorage(todos);
    input.value = '';
  }

  const handleSaveTodo = (target, data) => (ev) => {
    const input = document.getElementById(target);
    const [changeItem] = todos.filter(item => item.id === data.id);
    changeItem.todo = input.value;
    setLocalStorage(todos);
  }

  const handleKeyupEnter = (target) => (ev) => {
    (ev.keyCode === 13) && document.getElementById(target).click();
  }

  const handleTodoDelete = (id) => (ev) => {
    todos = todos.filter(todo => todo.id !== id);
    setLocalStorage(todos);
  }
  const handleTodoCheck = (id) => (ev) => {
    const index = todos.findIndex(todo => todo.id === id);
    todos[index].checked = !todos[index].checked;
    setLocalStorage(todos);
  }
</script>

<main>
  <TodoForm 
    onSave={handleSaveInput} 
    onKeyup={handleKeyupEnter('save')} 
  />
  <TodoList 
    todos={todos} 
    onClick={handleSaveTodo} 
    onKeyup={handleKeyupEnter} 
    onDelete={handleTodoDelete}
    onCheck={handleTodoCheck}
  />
</main>

<style global lang="scss">
  body {
    width: 100vw;
    height: 100vh;
    background: #1488cc;
    background: linear-gradient(to left, #283593, #1976d2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'NanumSquareR';
  }
  main {
    position: relative;
    width: 420px;
    padding: 20px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(30px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  svg {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
  .style-glass {
    border: none;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    background: transparent;
    backdrop-filter: blur(5px);
    box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  }
  .form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form__input {
    flex: 1;
    margin-right: auto;
    padding: 16px 20px;
    color: #fff;
    font-size: 17px;
    border-radius: 6px;
  }
  .form__button {
    width: 52px;
    height: 52px;
    margin-left: 15px;
    color: #fff;
    font-size: 17px;
    border-radius: 6px;
  }
  .todos__list {
    width: 100%;
  }
  .todos__list-none {
    padding: 30px;
    text-align: center;
    color: #fff;
    font-size: 20px;
  }
  .todos__list-item {
    margin-top: 20px;
  }
  .todos__list-inner {
    position: relative;
    border-radius: 6px;
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 6px;
    }
    & .item-text {
      width: 100%;
      padding: 13px 50px;
      color: #fff;
      font-size: 17px;
      border-radius: 6px;
      cursor: pointer;
    }
    & .item-check, 
    & .item-delete {
      position: absolute;
      top: 0;
      left: 0;
      width: 45px;
      height: 45px;
      color: rgba(255, 255, 255, 0.5);
      z-index: 5;
      &:hover {
        color: #fff
      }
    }
    & .item-delete {
      left: auto;
      right: 0;
    }
  }
  .todos__list-inner.checked {
    &::after {
      width: 100%;
      background: rgba(255, 255, 255, 0.3);
      background: linear-gradient(60deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 100%);
      animation: complete 0.8s ease-in-out;
    }
    & .item-text {
      color: #ddd;
      cursor: default;
    }
    & .item-check {
      color: green;
    }
    & .item-delete {
      color: #ddd;
    }
  }

  @keyframes complete {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
</style>
