import React from 'react';
import { Button, Col, Container, Form, InputGroup, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => (
  <>
    <Container>
      <Row>
        <Col
          style={{ height: '70px' }}
          md={{ span: 6, offset: 6 }}
          className="d-flex justify-content-center align-items-center"
        >
          <Form>
            <InputGroup style={{ width: '400px' }}>
              <Form.Control type="search" placeholder="Cari Produk" aria-label="Search" />
              <Button variant="danger" style={{ background: '#eb3f36' }}>
                <i className="bi bi-search" />
              </Button>
            </InputGroup>
          </Form>
          <div className="d-flex mx-1">
            <i className="bi bi-heart mx-2" />
            <i className="bi bi-bag-check mx-2" />
            <div className="ms-2">
              <i className="bi bi-person" />
              <i className="bi bi-caret-down-fill" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <Navbar bg="light" style={{ height: '45px' }}>
      <Container fluid>
        <Container>
          <Button
            as={NavLink}
            to="/product-list"
            variant="danger"
            className={`${classes.menuButton}`}
          >
            BELANJA <i className="bi bi-caret-down-fill" />
          </Button>
        </Container>
      </Container>
    </Navbar>
  </>
);

export default MainNavigation;
