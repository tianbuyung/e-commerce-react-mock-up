import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { routes } from 'routes';
import { setUser } from 'store/authReducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loginUser = () => {
      const token = localStorage.getItem('token');
      if (token) {
        dispatch(setUser());
      }
    };

    loginUser();
  }, [dispatch]);

  return (
    <Routes className="position-relative">
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.page} />
      ))}
    </Routes>
  );
};

export default App;
