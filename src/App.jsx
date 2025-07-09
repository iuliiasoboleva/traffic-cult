import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
