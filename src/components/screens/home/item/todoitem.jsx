import React from 'react'
import Check from './check'
import { FaTrashCan } from "react-icons/fa6";

const TodoItem = ({todo, changeTodo, removeTodo}) => {
  return (
    <div className='todo-item'>
      <button onClick={() => changeTodo(todo._id)}>
        <Check isCompleted={todo.isCompleted} className='check-icon'/>
        <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
          {todo.title}
        </span>
      </button>
      <button>
        <FaTrashCan onClick={() => removeTodo(todo._id)} />
      </button>
    </div>
  )
}

export default TodoItem
