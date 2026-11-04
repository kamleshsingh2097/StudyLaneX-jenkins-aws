// This file is the entry point of my React application.
//  It connects React with the HTML file and renders the main App component to the browser.
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";


const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    
      <App />
    
  </BrowserRouter>
);
/*The main.jsx file is the entry point of my React application.
It creates the root element and renders the App component into the DOM.
I also wrapped the App inside BrowserRouter to enable routing functionality in the project.*/
