import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";

const CreateTodoField = ({ setTodos }) => {
    const [title, setTitle] = useState('')

    const addTodo = (title) => {
        setTodos(prev => [
            {
                _id: new Date(),
                title,
                isCompleted: false
            },
            ...prev,
        ])
        setTitle('')
    }

    return (
        <div className='create-task-box'>
            <input 
                type="text" 
                placeholder='Введите задачу'
                onChange={e => setTitle(e.target.value)} 
                value={title} 
                onKeyUp={e => e.key === 'Enter' && addTodo(title)} 
            />
            <button onClick={() => addTodo(title)}>
                <FiPlus />
            </button>
        </div>
    )
}

export default CreateTodoField
