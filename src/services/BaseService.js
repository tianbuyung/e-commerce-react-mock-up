/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
const API = 'https://techtest.folkatech.com/api';

class BaseService {
  async fetch({ path, options }) {
    const url = API + path;

    options.headers = {
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  }
}

export default BaseService;
