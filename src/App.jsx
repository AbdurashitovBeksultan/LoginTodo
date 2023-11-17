import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Todushka from './components/Todushka';

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="/todo" element={<Todushka  />} />
    </Routes>
  );
};

export default App;
