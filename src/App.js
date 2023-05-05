import React,{useState} from 'react'
import {v4 as uuidv4 } from "uuid"


import Addtodo from './components/Addtodo/addtodo'
import EachTodoItem from "./components/EachTodoItem/eachtodoitem"
import EditTodoItem from "./components/EditTodoItem/edittodoitem"

const App = () => {

  const [todoList,setTodoList] = useState([])

  const addTodoItem =(task)=>{

    const todoItem = {
      id : uuidv4(),
      task : task,
      isCompleted : false,
      edited : false 
    }

    setTodoList([...todoList,todoItem])
    console.log(todoList)
  }


  const deleteItem=(id)=>{
    const updatedList = todoList.filter(eachTodo => eachTodo.id !== id)

    setTodoList(updatedList)
  }

  const completedTodoItem=(id)=>{
    const updatedTodoItem = todoList.map(eachTodo => eachTodo.id === id ? {...eachTodo,isCompleted : !eachTodo.isCompleted} : eachTodo)
    setTodoList(updatedTodoItem)
  }

  const editTodoItemInList=(task,id)=>{
    // console.log(task,id)
    const editedTodoList = todoList.map(eachItem => eachItem.id === id ? {...eachItem,task,edited : !eachItem.edited} : eachItem)
    setTodoList(editedTodoList)
  }

  return (
    <center>
    <h1 className='title'>Todos</h1>
    <Addtodo addTodoItem={addTodoItem}/>
    <ul>
      {todoList.map(eachTodo => eachTodo.edited ? <EditTodoItem key={eachTodo.id} currentTask={eachTodo} editTodoItemInList={editTodoItemInList}/> : 
      (
        <EachTodoItem key={eachTodo.id} details={eachTodo} deleteTodoItem={deleteItem} 
        completedTodoItem={completedTodoItem} editTodoItemInList={editTodoItemInList}/>
      ))}
    </ul>
    </center>
  )
}

export default App