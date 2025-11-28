import { useState } from 'react'
import '../App.css'

const Todo=()=>{
    let [inpText,setInpText]=useState("")

    let [todoList,setTodoList]=useState([])

    let handleHitEnter=(e,inpText)=>{
        if(inpText.trim()==="" || todoList.some((todo)=>todo.Text==inpText.trim().toLowerCase()) ) return;
        if(e.key==='Enter'){
            let item={
                id: todoList.length+1,
                Text: inpText.trim().toLowerCase(),
                completed: false
            }

            setTodoList((prev)=>[...prev,item])
            setInpText("")
        }
    }

    let handleClickAdd=(inpText)=>{
        if(inpText.trim()==="" || todoList.some((todo)=>todo.Text==inpText.trim().toLowerCase()) ) return;
        let item={
                id: todoList.length+1,
                Text: inpText.trim().toLowerCase(),
                completed: false
            }

        setTodoList((prev)=>[...prev,item])
        setInpText("")
    }

    let handleDelete=(id)=>{
        let updatedTodoList=todoList.filter((item)=>item.id!=id)
        setTodoList(updatedTodoList)
    }

    let handleCompletion=(item)=>{
        let updatedTodoList=todoList.map((todo)=>{
            if(todo.id===item.id){
                return {...todo,completed: !todo.completed}
            }
            return todo
        })
        setTodoList(updatedTodoList)
    }

    return (
        <div>
            <div className="todo-inp-div">
                <input type="text" placeholder="Enter Todo and Hit Enter or click add button" className='todo-inp' value={inpText} onChange={(e)=>setInpText(e.target.value)} onKeyDown={(e)=>handleHitEnter(e,inpText)} />

                <button className='add-btn' onClick={()=>handleClickAdd(inpText)}>+ Add</button>
            </div>

            <div>
                {
                    todoList && todoList.map((item)=>{
                        return (
                            <div key={item.id} className='todo-item-div' >
                                <li>
                                    <input type="checkbox" checked={item.completed} onChange={()=>handleCompletion(item)} />
                                    <span className={item.completed ? "strike" : ""} >{item.Text}</span>
                                    <div>
                                    <button className='delete-btn' onClick={()=>handleDelete(item.id)}>Delete</button>
                                    </div>
                                </li>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Todo