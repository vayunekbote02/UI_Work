import { useEffect, useRef, useState } from "react";

function Item({ item, setTodos }) {
  const completeTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, is_complete: !todo.is_complete } : todo
      )
    );
  };

  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const handleEdit = () => {
    setEditing(true);
  };
  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
  };
  const handleInputSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
  };
  const handleInputBlur = () => {
    setEditing(false);
  };
  const handleInputChange = (event) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id
          ? { ...todo, title: event.target.value, is_complete: false }
          : todo
      )
    );
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);

  return (
    <li id={item?.id} className="todo_item">
      {editing ? (
        <form onSubmit={handleInputSubmit} className="edit-form">
          <label htmlFor="edit-todo">
            <input
              type="text"
              ref={inputRef}
              name="edit-todo"
              id="edit-todo"
              defaultValue={item?.title}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
            />
          </label>
        </form>
      ) : (
        <>
          <button className="todo_items_left">
            <input
              type="checkbox"
              checked={item.is_complete}
              onClick={completeTodo}
            />
            <p className={item.is_complete && "task-done"}>{item?.title}</p>
          </button>
          <div className="todo_items_right">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleEdit}>Edit</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

function ToDoList({ todos, setTodos }) {
  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => (
          <Item key={index} item={item} setTodos={setTodos} />
        ))
      ) : (
        <p>Seems like no tasks are currently available.</p>
      )}
    </ol>
  );
}

export default ToDoList;
