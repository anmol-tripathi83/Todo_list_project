// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { Provider } from 'react-redux';    // acting like context API but it is provided by the react redux which helps to provide store access to all components within (<App/> here) 
import store from './store.js';


createRoot(document.getElementById('root')).render(
    <Provider store={store}>  
        <App />
    </Provider>
)
