import Todo from "../Todo/todo"
import TodoContext from "../../context/TodoContext";
import { useContext } from "react";
import todoDispatchContext from "../../context/todoDispatchContext";


function TodoList(){
    const {list} = useContext(TodoContext);
    const {dispatch} = useContext(todoDispatchContext);

    function onFinished(todo, isFinished){
        /*
        const updatedList = list.map(t =>{
        if(t.id==todo.id){
            todo.finished = isFinished;
        }
        return t;
        });
        setList(updatedList);
        */
        dispatch({type: 'finish_todo', payload: {todo, isFinished}});
    }

    function onDelete(todo){
        /* Now we do same work with the help of Reducer function
        const updatedList = list.filter(t => t.id != todo.id)
        setList(updatedList);
        */
        dispatch({type:'delete_todo', payload: {todo}});
    }

    function onEdit(todo, todoText){
        /* Now we use Reducer function
        const updatedList = list.map(t =>{
            if(t.id==todo.id){
                todo.todoData = todoText;
            }
            return t;
        });
        setList(updatedList);
        */
        dispatch({type:'edit_todo', payload: {todo, todoText}});
    }


    return (
        <div>
           {list.length>0 && 
           list.map(todo => <Todo 
                               key={todo.id} 
                               id={todo.id} 
                               todoData={todo.todoData} 
                               isFinished={todo.finished}
                               changeFinished={(isFinished) =>onFinished(todo, isFinished)}
                               onDelete={() => onDelete(todo)}
                               onEdit={(todoText) => onEdit(todo,todoText)}
                            /> )}
        </div> 
    );
}

export default TodoList;