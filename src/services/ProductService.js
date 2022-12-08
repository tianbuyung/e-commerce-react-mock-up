import BaseService from 'services/BaseService';

class ProductService extends BaseService {
  getProductList = async (query) => {
    const path = `/product?${query}`;
    const options = {
      method: 'GET',
    };

    const request = await this.fetch(path, options, true);

    return request;
  };
}

export default ProductService;
