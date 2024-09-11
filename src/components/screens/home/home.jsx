import React, { useState, useEffect } from 'react'
import TodoItem from './item/todoitem'
import CreateTodoField from './create-todo-field/createTodoField'

const Home = () => {
    const [todos, setTodos] = useState(() => {
        // Загрузка задач из localStorage при первом рендере
        const savedTodos = localStorage.getItem('todos')
        return savedTodos ? JSON.parse(savedTodos) : []
    })

    useEffect(() => {
        // Сохранение задач в localStorage при их изменении
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = id => {
        setTodos([...todos].filter(t => t._id !== id))
    }

    return (
        <div className='home-box'>
            <h1>TODO LIST <span>on React</span></h1>
            {todos.map(todo => 
                <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />
            )}
            <CreateTodoField setTodos={setTodos} />
        </div>
    )
}

export default Home
