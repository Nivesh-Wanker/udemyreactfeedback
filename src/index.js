import React from 'react'
import ReactDOM  from 'react-dom/client'
import App from './App';
import './Index.css'

// ReactDOM.render(
//  <React.StrictMode> 
//     <BrowserRouter>  
// <App />
// </BrowserRouter>
// </React.StrictMode>
// ,document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)