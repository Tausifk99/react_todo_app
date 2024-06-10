import { useState } from "react";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todo() {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Header />
      <TodoForm
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setTodo={setTodo}
        todo={todo}
      />
    </div>
  );
}
