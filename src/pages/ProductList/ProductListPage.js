import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { Layout, ProductList } from 'components';
import ProductService from 'services/ProductService';
import { setProductList } from 'store/productReducer';

const productService = new ProductService();

const keyword = '';
const minPrice = 10000;
const maxPrice = 250000;
const page = 1;
const limit = 10;
const orderBy = 'product_name';
const sortBy = 'ASC';

const ProductListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProductList = async () => {
      const query = `keyword=${keyword}&price=${minPrice},${maxPrice}&page=${page}&limit=${limit}&order=${orderBy},${sortBy}`;
      const response = await productService.getProductList(query);
      dispatch(setProductList(response?.data?.list));
    };

    getAllProductList();
  }, [dispatch]);

  return (
    <Layout>
      <Container>
        <Row>
          <Col>Sidebar</Col>
          <Col>
            <ProductList />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProductListPage;
