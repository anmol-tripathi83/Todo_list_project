import { useDispatch } from 'react-redux';
import './App.css'
import AddTodo from './component/AddTodo/AddTodo';
import TodoList from './component/TodoList/TodoList';
import { bindActionCreators } from 'redux';
import { addTodo, deleteTodo, editTodo, todoFinished } from './actions/todoActions';

function App() {
  // Now we dont want to give access of dispatch method to all components to add avoid adding different actions in argument by other
  const dispatch = useDispatch();
  const actions = bindActionCreators({addTodo, deleteTodo, editTodo, todoFinished}, dispatch);  // binds these functions with dispatch now we call using actions object such as actions.addTodo() etc...

  return (
    <>
    <AddTodo addTodo={actions.addTodo}/>
    <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={actions.todoFinished}/>
    </>
  );
}

export default App;