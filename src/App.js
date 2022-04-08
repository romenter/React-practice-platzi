import React from "react";
import {TodoCounter} from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";

//import './App.css';

const todos = [
  {text:'Cortar cebolla', complete:'false'},
  {text:'Cursar react', complete:'false'},
  {text:'Llorar :(', complete:'false'}

]

function App() {
  return (
    <>
      <TodoCounter />
    <TodoSearch />

    <TodoList>
      {todos.map(todo =>(
        <TodoItem key={todo.text} text={todo.text} />
      ))}
    </TodoList>

    <CreateTodoButton />
    </>
);
}

export default App;
