import React from 'react';
import { Container } from 'react-bootstrap';

import Layout from 'components/Layout/Layout';
import StartingPage from 'components/StartingPage/StartingPage';

const HomePage = () => (
  <Layout>
    <Container>
      <StartingPage />
    </Container>
  </Layout>
);

export default HomePage;
