import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from "./Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/> }/>
        <Route path="/projects" element={<Projects/> }/>
        <Route path="/contact" element={<Contact/> }/>

      </Routes>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
