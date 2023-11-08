import "tailwindcss/tailwind.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
// import requestInterceptor from "./interceptors/requestInterceptor";
// import axiosResponseInterceptor from "./interceptors/responseInterceptor";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<App />}>
     <Route path="/" element={<Login />} />
     <Route path="/dashboard" element={<Dashboard/>} />
     <Route path="/register" element={<Register/>} />
     </Route>
     

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
