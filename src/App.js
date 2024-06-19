import { useState } from "react";
import "./App.css";
import  NewTodoForm  from "./components/NewTodoForm.js";
import { TodoList } from "./components/ToDoList.js";
function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  console.log(todos);

  let [increase, setIncrease] = useState(0);
  let [decrease, setDecrease] = useState(0);
  function increament() {
    setIncrease(increase + 1);
  }
  function decreament() {
    setDecrease(decrease - 1);
  } 

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos}/>
    </>
  );
}

export default App;
