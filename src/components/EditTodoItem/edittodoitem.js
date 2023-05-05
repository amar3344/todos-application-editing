import {useState} from "react"

import "./index.css"

const EditTodoItem = (props) => {

  const {editTodoItemInList,currentTask} = props

  const [inputTodo,setInputTodo] = useState(currentTask.task)

  const gettingInputTodoTask =(e)=>setInputTodo(e.target.value)

  const editTodo = (e)=>{
      e.preventDefault()

      editTodoItemInList(inputTodo,currentTask.id)
      setInputTodo("")
      

  }
  return (
    <form onSubmit={editTodo} className="edit-todo">
      <input type="text" value={inputTodo} palceholder="Edit Your Todo Task Here" onChange={gettingInputTodoTask}/>
      <button type="submit">Edit Todo</button>
    </form>
  )
}

export default EditTodoItem