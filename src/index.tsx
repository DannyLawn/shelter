import React from 'react';
import ReactDOM from 'react-dom/client';
import store  from "./services/index";
import { Provider } from "react-redux";
import './index.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>
);

 
