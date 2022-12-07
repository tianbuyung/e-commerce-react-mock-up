import {
  ErrorPage,
  HomePage,
  LoginPage,
  ProductDetailPage,
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
    path: '/product-detail/:id',
    page: <ProductDetailPage />,
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
