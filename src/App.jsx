import { useReducer, useState } from 'react';
import './App.css'
import AddTodo from './component/AddTodo/AddTodo';
import TodoList from './component/TodoList/TodoList';
import TodoContext from './context/TodoContext';
import todoDispatchContext from './context/todoDispatchContext';
import todoReducer from './reducers/todoReducer';

function App() {

  const [list , dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{list}}>
      <todoDispatchContext.Provider value={{dispatch}}>
        <AddTodo />
        <TodoList />
      </todoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;