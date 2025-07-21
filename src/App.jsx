import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import authIcon from './assets/images/auth.png';
import Layout from './components/Layout';
import Modal from './components/Modal';
import { linksMock } from './mocks/linksMock';
import Analytics from './pages/Analytics';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Withdrawal from './pages/Withdrawal';
import { login } from './store/authSlice';
import { setLinks } from './store/linksSlice';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(setLinks(linksMock));
  }, [dispatch]);

  const handleAuth = () => {
    // В реальной ситуации тут Telegram login
    dispatch(login());
  };

  return (
    <>
      <GlobalStyle />
      {/* {!isAuthenticated && (
        <Modal
          title="Вход на платформу"
          text="Пожалуйста, пройдите авторизацию через нашего Telegram-бота"
          confirmLabel="Авторизоваться"
          onConfirm={handleAuth}
          icon={authIcon}
          onCancel={() => {}}
          cancelLabel={null}
          isAuth={true}
          danger={true}
        />
      )} */}
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
