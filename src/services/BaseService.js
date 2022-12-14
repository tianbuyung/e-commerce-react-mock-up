/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
const API = process.env.REACT_APP_SERVER;

class BaseService {
  async fetch(path, options, authenticate = false) {
    if (authenticate) {
      const token = localStorage.getItem('token');

      options.headers = {
        authorization: `Bearer ${token}`,
      };
    }

    const url = `${API}${path}`;

    options.headers = {
      ...options.headers,
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  }
}

export default BaseService;
