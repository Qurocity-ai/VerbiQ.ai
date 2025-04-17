import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import {BrowserRouter} from 'react-router-dom'

// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   // <StrictMode>
//   <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   //  </StrictMode>,
// )
