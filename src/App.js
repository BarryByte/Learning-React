import { useState } from "react";
import "./App.css";
import NewTodoForm from "./components/NewTodoForm.js";
import { TodoList } from "./components/ToDoList.js";
import addToCart from "./components/Cart/AddToCart.js";
import Products from "./components/Product/Products.js";
import CartContext from "./components/Context/CartContext.js";
function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }
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
  let [cart, setCart] = useState({});

  function increment(product) {
    const newCart = { ...cart };
    // here we are changing the reference of the object so that react can detect the change and re-render the component

    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1
      };
    } else {
      newCart[product.id].quantity++;
    }
    setCart(newCart);
    // here we are again changing the reference to re-render the component
  }
  function decrement(product) {
    if (!newCart[product.id]) {
      return;
    }
    const newCart = { ...cart };
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity == 0) {
      delete newCart[product.id];
    }
  }

  return (
    <>
     <CartContext.Provider value={{ cart, increment, decrement}}>
      <div className="App">
      <Products cart={cart} increment={increment} decrement={decrement} />
      </div>
    </CartContext.Provider>
    </>
  );
}

export default App;
