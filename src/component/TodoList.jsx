import React from 'react'
import { TodoItem } from './TodoItem'
import Styles from "./list.module.css"

export const TodoList = ({data}) => {
  return (
    <div>
        {data.map((item,i)=>{
            return(
                <div key={i} className={Styles.container}>
                    <TodoItem {...item}/><input type="radio" id="checked" className={Styles.radio}/>
                </div>
            )
        })}
    </div>
  )
}
