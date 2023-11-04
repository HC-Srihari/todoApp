import React, { createContext } from "react";

export const todoContext = createContext({
    todos:[
        {
            id:1,
            todo:'task 1',
            isChecked:false
        }

    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    setTaskCompleted:(id)=>{},

})