import  { useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addTodo,removeTodo,clearAll,editToDo} from '../Features/todo/todoSlice' 
import './Todo.css'
function AddTodo() {

    const [input, setInput] = useState('')//input
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
      if(input===""){
       return ;
      }
      else{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
      }
    }
    const [editToDoObj,seteditTodoObj] = useState({}); //edit
    const [isEdit,setIsEdit] = useState(false); //button
    
     const editHandler = (value) =>{
      seteditTodoObj(value);
      setInput(value.text);
      setIsEdit(true);
    }
    const saveBtn = () =>{
      dispatch(editToDo({id:editToDoObj.id,text:input}));
      setInput('');
      setIsEdit(false);
    }
    const todo = useSelector(state =>state.todoarray)
     return(
    <div className='main' >
      <h1>Todo-List</h1>
      <input 
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />{' '}
       {<button onClick={isEdit ?saveBtn:addTodoHandler}>{isEdit? "Save" : "Add"}</button>}
      <button onClick={()=>dispatch(clearAll())} >Clear All</button> 
      <ul>
        {todo.map((todo) => (
          <li key={todo.id} >
           {todo.text}
           {" "} <button onClick={() => dispatch(removeTodo(todo.id))}>            
            Delete
            </button>
            {' '} 
            <button onClick={()=>editHandler(todo)} >Edit </button>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default AddTodo
