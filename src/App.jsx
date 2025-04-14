import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackgroundPatterns from './components/BackgroundPatterns.jsx';
import Header from './components/Header.jsx';
import DigitalID from './components/DigitalID.jsx';

function App() {
  return (
    <Router>
      <div className="relative">
        <BackgroundPatterns />
        <Header />
        <Routes>
          <Route path="/:username" element={<DigitalID />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
