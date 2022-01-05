import React from 'react';
import Home from './Pages/Home';
import "./CSS/App.css";
import "./CSS/Responsive.css";
import { Routes, Route } from 'react-router-dom';
import Redirecting from './Pages/Redirecting';

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/:id" element={<Redirecting />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  )
}

export default App;