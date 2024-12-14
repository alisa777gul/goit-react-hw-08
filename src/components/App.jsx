import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { Route, Routes } from 'react-router-dom';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout';
import { refreshUser } from '../redux/auth/operations';
import { Toaster } from 'react-hot-toast';
import Loader from './loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LogInPage = lazy(() => import('../pages/LogInPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Layout>
      <Loader />
    </Layout>
  ) : (
    <Suspense fallback={<Loader />}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#fff',
            color: '#000',
          },

          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'white',
            },
          },
        }}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LogInPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
