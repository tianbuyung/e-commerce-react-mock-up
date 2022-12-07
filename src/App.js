import { Route, Routes } from 'react-router-dom';
import routes from 'routes';

const App = () => (
  <Routes className="position-relative">
    {routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.page} />
    ))}
  </Routes>
);

export default App;
