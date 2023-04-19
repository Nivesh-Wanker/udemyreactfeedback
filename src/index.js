import React from 'react'
import ReactDOM  from 'react-dom/client'
import App from './App';
import './Index.css'
import { Auth0Provider } from "@auth0/auth0-react";

// ReactDOM.render(
//  <React.StrictMode> 
//     <BrowserRouter>  
// <App />
// </BrowserRouter>
// </React.StrictMode>
// ,document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Auth0Provider
    domain="dev-y13skgvhopyrpoh2.us.auth0.com"
    clientId="BWghBtyON5GJLRTsqxIB12YFggXuDPH2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </Auth0Provider>
)