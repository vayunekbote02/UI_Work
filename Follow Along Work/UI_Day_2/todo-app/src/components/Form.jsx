import { v4 as uuidv4 } from "uuid";

function Form({ setTodos }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.todo.value;
    if (value.trim() === "") return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { title: value, id: uuidv4(), is_complete: false },
    ]);
    event.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" name="todo" id="todo" placeholder="Add a new task" />
      <button>
        <span className="visually-hidden">Submit</span>
        <span className="plus_button">➕</span>
      </button>
    </form>
  );
}

export default Form;
