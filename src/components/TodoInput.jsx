import React, { useContext, useState } from "react";
import { todoContext } from "../context/todoContext";

function TodoInput(){

    const {addTodo}= useContext(todoContext)
    const [message,setMessage] = useState('')
    const [errorMessage,setErrorMessage] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log(message)
        if(message.length>0){
            addTodo({todo:message,isChecked:false})
            setMessage('')
            setErrorMessage('')
        }else{
            setErrorMessage('TODO cannot be empty !!!')
            return
        }

        
    }

    return(
        <>
            <div className="flex mt-4">
                <form onSubmit={handleSubmit} className="mx-auto">
                    <input type="text" placeholder="Enter your todos..." value={message} onChange={(e)=>(setMessage(e.target.value))}
                    className="bg-gray-600 p-2 w-auto text-xl  text-white outline-none placeholder:text-slate-300    rounded-tl-md rounded-bl-md"/>
                    <button type="submit" className="bg-sky-800 text-xl text-white p-2 rounded-br-md rounded-tr-md ">ADD</button>

                </form>
            </div>
            <div className="text-red-600 h-5 text-center">{errorMessage}</div>
        </>
    )
}

export default TodoInput