import React, { useContext, useState } from "react";
import { todoContext } from "../context/todoContext";

function TodoList({todo}){
    const [task,setTask] = useState(todo.todo)
    const [isCompleted,setIsCompleted]  = useState(todo.isChecked)
    const [isEditable,setIsEditable] = useState(false)

    const {updateTodo,deleteTodo,setTaskCompleted} = useContext(todoContext)

    const handleCheck=()=>{
        setIsCompleted(!isCompleted)
        setTaskCompleted(todo.id)
    }
    const handleDelete=()=>{
        deleteTodo(todo.id)
    }

    const handleEdit=()=>{
        setIsEditable(!isEditable)
        
        updateTodo(todo.id,task)
    }

    return(
        <>
        <div className="flex bg-green-500 h-14 m-2 my-4 p-2 items-center justify-between rounded-lg">
    <div className="flex items-center">
        <input type="checkbox" onChange={handleCheck} checked={isCompleted} className="w-4 h-10" />
        <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            readOnly={!isEditable}
            className={`${
                isEditable
                    ? 'border-black/10 border-2 outline-none '
                    : 'outline-none'
            } ${
                isCompleted ? 'line-through border-none' : ''
            } bg-green-500 mx-2 p-2 w-full rounded-md text-xl`}
        />
    </div>
    <div className="flex">
        <button
            className={`bg-sky-200 p-2 h-10 rounded-md mr-2 ${
                isCompleted ? 'bg-white/25' : 'bg-sky-200'
            }`}
            onClick={handleEdit}
            disabled={isCompleted}
        >
            {isEditable ? '📁' : '✏'}
        </button>
        <button onClick={handleDelete} className="bg-sky-200 h-10 p-2 rounded-md">
            {'❌'}
        </button>
    </div>
</div>

        </>
    )
}

export default TodoList