// App.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Withdrawal from './pages/Withdrawal';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/withdrawal"
            element={
              <Layout>
                <Withdrawal />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
