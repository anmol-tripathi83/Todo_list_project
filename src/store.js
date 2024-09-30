import { createStore, combineReducers } from "redux";

// Reducer import
import todoReducer from "./reducers/todoReducer";

// here we use combineReducers beacuse lats suppose future me have many reducers so to combine them and make one reducer to pass it to the crrateStore function of core react
const reducers = combineReducers({todo:todoReducer});   // yha pe jo name humne todolist ko diya h which is todo yha ab list ka kaam karega ise import karna hoga jha list needed hoga phir use list me store kar use kar skte h

const store = createStore(reducers);

export default store;