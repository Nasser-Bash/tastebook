import React from 'react';
import ReactDOM from 'react-dom/client';
import  "bootstrap/dist/css/bootstrap.min.css";
import  "bootstrap/dist/js/bootstrap.min.js";
import App from './App';
import { Provider } from "react-redux";
import { store } from "../src/Redux/store/store";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <Provider store={store}>
     <App />
   </Provider>
   
  
);
