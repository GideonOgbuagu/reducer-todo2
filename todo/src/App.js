import React, { useState, useReducer } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

const reducer = (state, action) => {


}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState('');

  const handleChanges = e => {
    setTodo(e.target.value)
  }



  return (
    <div className="App">

      <h2>Welcome to your Reducer-Todo App</h2>
      <form>
        <div>
          <input type='text' value={todo} onChange={handleChanges}/>
          <button>Add Todo</button>
        </div>
        <div>
          <div>
            {}
          </div>
          <button>Clear Todo</button>
        </div>
          
      </form>
      
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
