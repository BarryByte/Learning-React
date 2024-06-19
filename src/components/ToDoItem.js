export function TodoItem({ completed,todo,title}) {
  return (
    <li key={todo.id}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          //   onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        // onClick={() => deleteTodo(id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
