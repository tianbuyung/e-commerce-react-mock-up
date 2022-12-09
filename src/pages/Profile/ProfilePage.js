import React from 'react';
import { useDispatch } from 'react-redux';

import { Layout } from 'components';
import { Button, Container } from 'react-bootstrap';
import { setLogout } from 'store/authReducer';

const ProfilePage = () => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <Container>
        <div>ProfilePage</div>
        <Button variant="danger" type="button" onClick={() => dispatch(setLogout())}>
          Logout
        </Button>
      </Container>
    </Layout>
  );
};

export default ProfilePage;
