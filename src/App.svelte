<script>
  import TodoForm from "./components/TodoForm.svelte";
  import TodoList from "./components/TodoList.svelte";

  const setLocalStorage = (todos) => localStorage.setItem('todos', JSON.stringify(todos));
  const getLocalStorage = () => JSON.parse(localStorage.getItem('todos'));
  
  const getTodos = getLocalStorage();
  let todos = getTodos ? getTodos : [];
  let last = todos[todos.length - 1];
  let id = !last ? 0 : last.id + 1;

  const onSave = () => {
    const input = document.getElementsByName('todo')[0];
    if(!input.value) return;
    const newTodo = {
      id: id++,
      todo: input.value,
      checked: false
    }
    todos = [...todos, newTodo];
    setLocalStorage(todos);
    input.value = '';
  };

</script>

<main>
  <TodoForm onSave={onSave} />
  <TodoList todos={todos} />
</main>

<style global lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }

  body {
    width: 100vw;
    height: 100vh;
    background: #1488cc;
    background: linear-gradient(to left, #283593, #1976d2);
    /* background: url('https://source.unsplash.com/n7a2OJDSZns/2200x1100') no-repeat center / cover; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main {
    position: relative;
    width: 420px;
    padding: 30px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(30px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  .style-glass {
    border: none;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    background: transparent;
    backdrop-filter: blur(5px);
    box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
    /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); */
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
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-size: 17px;
    border-radius: 6px;
    outline: none;
    &::placeholder {
      color: #fff; 
    }
  }

  .form__button {
    width: 55px;
    margin-left: 15px;
    padding: 16px 20px;
    color: #fff;
    font-size: 17px;
    border-radius: 6px;
    outline: none;
    cursor: pointer;
    &::focus {
      background: none;
    }
  }

</style>
