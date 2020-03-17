import React from 'react'

const Todo = (props) => {
    return (
        <div>
            <p>{props.state.todos.item}</p>
        </div>
    )
}

export default Todo;
