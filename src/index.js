// import React
import React from "react";
// import ReactDOM 
import ReactDOM from "react-dom/client";
// import global styles a
import "./index.css";
// import the root App component
import App from "./App";

// find the div with root id in index.html 
const root = ReactDOM.createRoot(document.getElementById("root"));

// render App inside StrictMode 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
