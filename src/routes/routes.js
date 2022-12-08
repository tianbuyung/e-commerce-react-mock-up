import {
  ErrorPage,
  HomePage,
  LoginPage,
  ProductDetailsPage,
  ProductListPage,
  ProfilePage,
  RegisterPage,
} from 'pages';

const routes = [
  {
    path: '/',
    page: <HomePage />,
  },
  {
    path: '/login',
    page: <LoginPage />,
  },
  {
    path: '/register',
    page: <RegisterPage />,
  },
  {
    path: '/product-list',
    page: <ProductListPage />,
  },
  {
    path: '/product-details/:id',
    page: <ProductDetailsPage />,
  },
  {
    path: '/profile',
    page: <ProfilePage />,
  },
  {
    path: '*',
    page: <ErrorPage />,
  },
];

export default routes;
