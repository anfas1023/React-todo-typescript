import React, { useState } from "react";
import './App.css'
import InputFeild from "./Components/InputFeild";
import { Todo } from "./model";
import TodoList from "./Components/TodoList";

const App : React.FC=()=>{

  const [todo,setTodo]=useState<string>("")
  const [todos,setTodos]=useState<Todo[]>([])
  // console.log(todo);
  const handleAdd=(e: React.FormEvent<EventTarget>)=>{
    e.preventDefault();
    setTodos([...todos,{id:Date.now(),todo,isDone:false}]);
    setTodo("")
  }
   console.log(todos);
   
  return <div className="App">
    <span className="heading">Taskify</span>
    <InputFeild todo={todo} setTodo={setTodo}  handleAdd={handleAdd}  />
    <TodoList todos={todos} setTodos={setTodos} />   
  </div>;
}

export default App;
