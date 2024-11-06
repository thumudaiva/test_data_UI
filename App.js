// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Landing from './pages/Landing';
import Usecase from './pages/Usecase';
import Dataset from './pages/Dataset';
import Experiments from './pages/Experiments';
import Serving from './pages/Serving';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/usecase" element={<Usecase />} />
            <Route path="/dataset" element={<Dataset />} />
            <Route path="/experiments" element={<Experiments />} />
            <Route path="/serving" element={<Serving />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
