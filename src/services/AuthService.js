import BaseService from 'services/BaseService';

class AuthService extends BaseService {
  login = async (payload) => {
    const path = '/login';
    const options = {
      method: 'POST',
      body: JSON.stringify(payload),
    };

    const request = await this.fetch({ path, options });

    return request;
  };

  register = async (payload) => {
    const path = '/register';
    const options = {
      method: 'POST',
      body: JSON.stringify(payload),
    };

    const request = await this.fetch({ path, options });

    return request;
  };
}

export default AuthService;
