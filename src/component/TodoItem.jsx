import React from 'react'
import Styles from "./list.module.css"

export const TodoItem = ({title}) => {
  return (
    <div className={Styles.todo}>
        <h3>{title}</h3>
    </div>
  )
}
