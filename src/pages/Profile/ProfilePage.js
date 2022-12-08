import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import { Button } from 'react-bootstrap';
import { logout } from 'store/authReducer';

const ProfilePage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated]);

  return (
    <Layout>
      <div>ProfilePage</div>
      <Button variant="danger" type="button" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </Layout>
  );
};

export default ProfilePage;
