import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    return (
        <div>
            <Todo state={props.state}/>

            <button>Clear Todo</button>
        </div>
    )
}

export default TodoList;
