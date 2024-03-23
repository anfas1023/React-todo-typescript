import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { CiEdit } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";
import "./styles.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
 const [edit,setEdit]=useState<boolean>(false)
 const [editTodo,setEditTodo]=useState<string>(todo.todo)
  let hadleDone = (id: number) => {
    let Done :Todo[] = todos.map((todo) => {
     return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
    });
  
    setTodos(Done)

  };

  const inputRef=useRef<HTMLInputElement>(null)

  const handleDelete=(id:number)=>{
  let Delete=todos.filter((todo)=>{
    if(todo.id!==id){
      return {...todo}
    }
  })
  setTodos(Delete)
  }

  useEffect(()=>{
   inputRef.current?.focus()
  },[edit])

  const handleEdit=(e: React.FormEvent<EventTarget>,id:number)=>{
    e.preventDefault();
    setTodos(todos.map((todo)=>(
        todo.id===id ? {...todo,todo:editTodo} : todo
    )))

    setEdit(false)
  }
  return (
    <div>
      <form className="todos-single" onSubmit={(e)=>handleEdit(e,todo.id)}>
      {todo.isDone ?  <span className="icon-cross">{todo.todo}</span> :   <span className="todos-singletext">{todo.todo}</span>}
        <div>
        {edit?(
            <input ref={inputRef} value={editTodo} onChange={(e)=>setEditTodo(e.target.value)}></input>
        ) : (
            <span onClick={()=>setEdit(!edit)}  className="icon">
            <CiEdit />
          </span>
        )}
          <span onClick={()=>handleDelete(todo.id)} className="icon">
            <AiFillDelete />
          </span>
          <span className="icon" onClick={() => hadleDone(todo.id)}>
            <MdOutlineDownloadDone />
          </span>
        </div>
      </form>
    </div>
  );
};

export default SingleTodo;
