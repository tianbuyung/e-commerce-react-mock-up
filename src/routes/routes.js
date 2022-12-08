import {
  ErrorPage,
  HomePage,
  LoginPage,
  ProductDetailsPage,
  ProductListPage,
  ProfilePage,
  RegisterPage,
} from 'pages';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRouteNonAuth = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    }
  }, [isAuthenticated, navigate]);

  return children;
};

const ProtectedRouteAuth = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return children;
};

const routes = [
  {
    path: '/',
    page: <HomePage />,
  },
  {
    path: '/login',
    page: (
      <ProtectedRouteNonAuth>
        <LoginPage />
      </ProtectedRouteNonAuth>
    ),
  },
  {
    path: '/register',
    page: (
      <ProtectedRouteNonAuth>
        <RegisterPage />
      </ProtectedRouteNonAuth>
    ),
  },
  {
    path: '/product-list',
    page: (
      <ProtectedRouteAuth>
        <ProductListPage />
      </ProtectedRouteAuth>
    ),
  },
  {
    path: '/product-details/:id',
    page: <ProductDetailsPage />,
  },
  {
    path: '/profile',
    page: (
      <ProtectedRouteAuth>
        <ProfilePage />
      </ProtectedRouteAuth>
    ),
  },
  {
    path: '*',
    page: <ErrorPage />,
  },
];

export default routes;
