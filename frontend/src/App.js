import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ExpenseForm from './components/add';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/"  element={<Login  />} />
        <Route path="/dash" element={<ExpenseForm />} />
      </Routes>
    </Router>
  );
}

export default App;
