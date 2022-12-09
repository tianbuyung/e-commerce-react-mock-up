import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './ProductList.module.css';

const ProductList = () => {
  const productList = useSelector((state) => state.product.productList);

  return (
    <Row md={1} lg={3} className="g-2">
      {productList?.slice(0, 10).map((product) => (
        <Col key={product?.id}>
          <Link to={`/product-details/${product?.id}`} className="text-black text-decoration-none">
            <Card
              style={{
                height: '447px',
                cursor: 'pointer',
              }}
              className="px-1 text-center"
            >
              <Card.Img
                variant="top"
                src={product?.images[0]?.image_url}
                style={{ height: '300px', width: '100%', objectFit: 'scale-down' }}
              />
              <Card.Body>
                <Card.Title className="text-truncate">{product?.name}</Card.Title>
                <Card.Text>{product?.product_type?.name}</Card.Text>
                <div className="mt-1 d-flex justify-content-center align-items-center">
                  <div className={classes.small_ratings}>
                    <i className={`bi bi-star-fill ${classes.rating_color}`} />
                    <i className={`bi bi-star-fill ${classes.rating_color}`} />
                    <i className={`bi bi-star-fill ${classes.rating_color}`} />
                    <i className={`bi bi-star-fill ${classes.rating_color}`} />
                    <i className={`bi bi-star-fill ${classes.rating_color}`} />
                  </div>
                </div>
                <Card.Text>Rp {product?.price}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
