import React, { useRef } from 'react'
import './styles.css'
interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleAdd:(e: React.FormEvent<EventTarget>)=>void
}
// function InputFeild({todo,setTodo}:Props)
const InputFeild:React.FC<Props>=({todo,setTodo,handleAdd})=>{
    let inputRef=useRef<HTMLFormElement>(null)
  return (
   <form ref={inputRef} className='input' onSubmit={(e)=>{
    handleAdd(e)
    inputRef.current?.blur
   } }>
     <input  onChange={(e)=>setTodo(e.target.value)} value={todo} type ="input" className='inputbox' placeholder='Enter A Task'></input>
     <button  className='inputsubmit' type='submit'>Go</button>
   </form>
  )
}

export default InputFeild
