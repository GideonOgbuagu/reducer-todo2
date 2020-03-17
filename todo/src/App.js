import React, { useReducer } from 'react';
import { todoReducer, initialState } from './reducers/todoReducer';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';





const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const toggleTodo = (id) => {
    dispatch({type: 'TOGGLE_TODO', payload: id})
  }

  const addNewTodo = (id) => {
    dispatch({type: 'ADD_TODO', payload: id});
  } 

  const clearTodo = (id) => {
    dispatch({type: 'CLEAR_TODO', payload: id})
  }



  return (
    <div className="App">

      <h2>Welcome to your Reducer-Todo App</h2>
      <TodoForm addNewTodo={addNewTodo} />
      <TodoList state={state} toggleTodo={toggleTodo} clearTodo={clearTodo}/>
    </div>
  );
}

export default App;
