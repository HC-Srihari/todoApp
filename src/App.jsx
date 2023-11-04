import { useEffect, useState } from 'react'
import { todoContext } from './context/todoContext'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


function App() {

  const [todos,setTodos] = useState([])
  
  const addTodo = (todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
    
    // console.log('addtodo')
    // todos.map((todo)=>(console.log(todo)))
  }

  const deleteTodo =(id)=>{
    let tempTodo =[]
    todos.map((todo)=>{
      if(todo.id === id){
        tempTodo = [...tempTodo]
      }
      else{
        tempTodo = [...tempTodo,todo]
      }
    })

    setTodos(tempTodo)
  }

  const updateTodo =(id,task)=>{
      let tempTodo = []
      todos.map((todo)=>{
        if(todo.id === id){
          tempTodo = [...tempTodo,{...todo,todo:task}]
        }else{
          tempTodo = [...tempTodo,{...todo}]
        }
      })

      setTodos(tempTodo)
  }

  const setTaskCompleted = (id)=>{
    let tempTodo =[]
    todos.map((todo)=>{
      if(todo.id === id){
        tempTodo=[...tempTodo,{...todo,isChecked:!todo.isChecked}]
      }
      else{
        tempTodo = [...tempTodo,{...todo}]
      }
    })

    setTodos(tempTodo)
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length >0 ){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


  return (
  <>

  <div className='bg-gray-800  min-h-screen '>

    <todoContext.Provider value={{todos,addTodo,deleteTodo,updateTodo,setTaskCompleted}}>
      <div className=' bg-gray-800 w-full max-w-3xl content-center mx-auto p-2'>
      <TodoInput/>
      {
        
        todos.map((todo)=>(
          <div key={todo.id}>

            <TodoList todo={todo}/>
          </div>
        ))
      }
      </div>
      
      {console.log('hello')}
      
    </todoContext.Provider>
  </div>
  </>
  )
}

export default App
