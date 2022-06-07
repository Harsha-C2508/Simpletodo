import React from 'react'
import { useState } from 'react';
import Styles from './todo.module.css';
import { TodoList } from './TodoList';

export const Todo = () => {
    const [query,setQuery] = useState("");
    const [task,setTask] = useState([]);
    const handleChange=(e)=>{
       const {value}= e.target;
       setQuery(value);
    }
    const handleClick=()=>{
        const payload ={
            title:query
        }
        setTask([...task,payload])
       
    }
  return (
    <div className={Styles.box}>
        <TodoList data={task}/>
        <input 
        value={query}
        type="text" 
        className={Styles.input} 
        placeholder='Write Something...'  
        onChange={handleChange}/>
        <button 
        className={Styles.button}
        onClick={handleClick}
        > <b>+</b> </button>
    </div>
  )
}

