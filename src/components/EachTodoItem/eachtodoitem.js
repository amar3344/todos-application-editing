import React from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

import "./index.css"

const Eachtodoitem = (props) => {

    const {details,deleteTodoItem,completedTodoItem,editTodoItemInList} = props
    const classNameCompleted = details.isCompleted ? "completed" : null

    const editTodoItem=()=>editTodoItemInList(details.task,details.id)

    const deleteTodoItemFromList=()=>deleteTodoItem(details.id)
    const toggleChecked=()=>completedTodoItem(details.id)
  return (
    <li className='todo-item'>
        <h3 onClick={toggleChecked} className={classNameCompleted}>{details.task}</h3>
        <div>
            <button type="button" className='buttons' onClick={editTodoItem}><FiEdit/></button>
            <button type="button" className='buttons' onClick={deleteTodoItemFromList}><MdOutlineDeleteOutline/></button>
        </div>
    </li>
  )
}

export default Eachtodoitem