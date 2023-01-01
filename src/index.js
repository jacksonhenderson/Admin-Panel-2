import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import React from 'react';
import { Router, Routes } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory'
// import * as serviceWorker from "./serviceWorker"

// const history = createHistory()
 
// ReactDOM.render(
//   <Router>
    {/* <Routes /> */}
  {/* </Router>, */}
//   document.getElementById("root")
// )
 
// serviceWorker.unregister()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
