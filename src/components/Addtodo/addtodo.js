import {useState} from "react"
import React from 'react'

const Addtodo = (props) => {

  const {addTodoItem} = props

  const [inputTodo,setInputTodo] = useState("")

  const gettingInputTodoTask =(e)=>setInputTodo(e.target.value)

  const addTodo = (e)=>{
      e.preventDefault()

      addTodoItem(inputTodo)
      setInputTodo("")
      

  }
  return (
    <form onSubmit={addTodo}>
      <input type="text" value={inputTodo} palceholder="Enter Your Todo Task Here" onChange={gettingInputTodoTask}/>
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default Addtodo