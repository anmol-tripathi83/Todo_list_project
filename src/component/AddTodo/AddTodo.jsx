import { useState } from "react";
//import {useDispatch} from 'react-redux';    // provided by the react redux
//import { addTodo } from "../../actions/todoActions";


function AddTodo({addTodo}){
    // const dispatch = useDispatch();

    const [inputText, setInputText] = useState('');
    return (
        <div>
            <input
               type="text"
               value={inputText}
               placeholder="Add your next todo..."
               onChange = {e => setInputText(e.target.value)}
            />
            <button onClick={() =>{
                // dispatch(addTodo(inputText));
                addTodo(inputText);
                setInputText('');
                }}>Add</button>
        </div>
    );
}
export default AddTodo;