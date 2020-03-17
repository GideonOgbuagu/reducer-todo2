import React, { useState } from 'react';


const TodoForm = () => {
    const [todo, setTodo] = useState('');

    const handleChanges = e => {
      setTodo(e.target.value)
      console.log(todo)
    }

    return (
    <form>
          <input type='text' value={todo} onChange={handleChanges}/>
          <button onClick>Add Todo</button>
      </form>
    )
}

export default TodoForm;
