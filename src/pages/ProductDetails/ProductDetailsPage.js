/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Card, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';

import { Layout } from 'components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from './ProductDetailsPage.module.css';

const ProductDetailsPage = () => {
  const params = useParams();
  const productList = useSelector((state) => state.product.productList);
  const showProduct = productList.filter((product) => product?.id === Number(params.id));

  return (
    <Layout>
      <Container>
        Breadcrumb
        <Row className="mt-3">
          <Col>
            <Card
              style={{
                height: '524px',
              }}
              className="py-1"
            >
              <Card.Img
                src={
                  showProduct[0]?.images !== undefined ? showProduct[0]?.images[0]?.image_url : ''
                }
                style={{ height: '515px', width: '100%', objectFit: 'scale-down' }}
              />
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                height: '524px',
              }}
            >
              <Card.Title>{showProduct[0]?.name}</Card.Title>
              <Card.Subtitle>{showProduct[0]?.product_type?.name}</Card.Subtitle>
              <div className="d-flex justify-content-start align-items-start">
                <div className={classes.small_ratings}>
                  <i className={`bi bi-star-fill ${classes.rating_color}`} />
                  <i className={`bi bi-star-fill ${classes.rating_color}`} />
                  <i className={`bi bi-star-fill ${classes.rating_color}`} />
                  <i className={`bi bi-star-fill ${classes.rating_color}`} />
                  <i className={`bi bi-star-fill ${classes.rating_color}`} />
                </div>
              </div>
              <Card.Text>Rp {showProduct[0]?.price}</Card.Text>
              <div>Button Cart and Wishlist</div>
              <Card.Text>{showProduct[0]?.short_description}</Card.Text>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>Image</Col>
        </Row>
        <Row>
          <Tabs defaultActiveKey="deskripsi" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="deskripsi" title="Deskripsi">
              {showProduct[0]?.description}
            </Tab>
            <Tab eventKey="informasi" title="Informasi">
              Informasi produk
            </Tab>
          </Tabs>
        </Row>
        <Row>Rekomendasi Untuk Anda</Row>
      </Container>
    </Layout>
  );
};

export default ProductDetailsPage;
