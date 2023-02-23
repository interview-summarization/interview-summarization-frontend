import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Synchronous = lazy(() => import('./pages/Synchronous'));
const Asynchronous = lazy(() => import('./pages/Asynchronous'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/synchronous" element={<Synchronous />} />
        <Route path="/asynchronous" element={<Asynchronous />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
