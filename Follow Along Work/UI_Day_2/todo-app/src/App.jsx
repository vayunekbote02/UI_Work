import Header from "./components/Header";
import Form from "./components/Form.jsx";
import ToDoList from "./components/ToDoList.jsx";
import ToDoHero from "./components/ToDoHero.jsx";
import { useEffect, useState } from "react";

function App() {
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];

  // || [
  //   { title: "Wake up at 5 AM", id: 1, is_completed: false },
  //   { title: "Do Laundry", id: 2, is_completed: false },
  //   { title: "Go for a walk", id: 3, is_completed: false },
  // ];

  const [todos, setTodos] = useState(initialTodos);

  const todosCompleted = todos.filter(
    (todo) => todo.is_complete === true
  ).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Header />
      <ToDoHero todos_completed={todosCompleted} total_todos={todos.length} />
      <Form setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
