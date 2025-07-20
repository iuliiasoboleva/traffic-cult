import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import { linksMock } from './mocks/linksMock';
import Analytics from './pages/Analytics';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Withdrawal from './pages/Withdrawal';
import { setLinks } from './store/linksSlice';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLinks(linksMock));
  }, [dispatch]);

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
          <Route
            path="/analytics/:id"
            element={
              <Layout>
                <Analytics />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
