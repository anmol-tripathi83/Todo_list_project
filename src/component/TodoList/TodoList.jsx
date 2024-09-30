import { useSelector } from "react-redux";
import Todo from "../Todo/todo"


function TodoList({deleteTodo, editTodo, todoFinished}){

    //const dispatch = useDispatch();  // now no need
    const list = useSelector((state) => state.todo);



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

        //dispatch({type: 'finish_todo', payload: {todo, isFinished}}); 
        todoFinished(todo, isFinished);   // now no need of dispatch method
    }

    function onDelete(todo){
        /* Now we do same work with the help of Reducer function
        const updatedList = list.filter(t => t.id != todo.id)
        setList(updatedList);
        */

       // dispatch({type:'delete_todo', payload: {todo}});
       deleteTodo(todo);  // now no need of dispatch method
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

       // dispatch({type:'edit_todo', payload: {todo, todoText}});
       editTodo(todo, todoText);  // now no need of dispatch method
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