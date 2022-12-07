import React, { useRef, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AuthService from 'services/AuthService';
import classes from './LoginPage.module.css';

const authService = new AuthService();

const LoginPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');
  const [type, setType] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (enteredEmail.trim() === '' || enteredPassword.trim() === '') {
      alert('Please enter a valid input username/password.');
    }

    const payload = {
      email: enteredEmail,
      password: enteredPassword,
    };

    const getData = await authService.login(payload);
    if (getData.code === 400) {
      alert(getData.data.password[0]);
    }
    if (getData.code === 404) {
      alert(getData.message);
    }
    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';
    console.log(getData);
  };

  const showPasswordHandler = () => {
    if (show === false) {
      setShow(true);
      setType(true);
      setPassword(passwordInputRef.current.value);
    } else {
      setShow(false);
      setType(false);
      setPassword(passwordInputRef.current.value);
    }
  };

  return (
    <section className={`position-absolute top-50 start-50 translate-middle ${classes.auth}`}>
      <div className="m-4">
        <p className={classes.masuk}>Masuk</p>
        <Form onSubmit={submitHandler}>
          <Form.Group className={`pt-3 pb-2 ${classes.control}`} controlId="formBasicEmail">
            <Form.Control
              type="email"
              autoComplete="email"
              placeholder="Email"
              required
              ref={emailInputRef}
            />
          </Form.Group>
          <InputGroup className={`py-3 ${classes.control}`}>
            <Form.Control
              type={`${type ? 'text' : 'password'}`}
              autoComplete="current-password"
              placeholder="Password"
              aria-label="password"
              aria-describedby="password"
              required
              ref={passwordInputRef}
              defaultValue={password}
            />
            <Button
              variant="outline-light"
              id="password"
              type="button"
              onClick={showPasswordHandler}
            >
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputGroup>
          <p className="text-end pb-3" style={{ color: '#730C07' }}>
            Lupa Password?
          </p>
          <Button type="submit" variant="danger" className={classes.buttonSignIn}>
            MASUK
          </Button>
        </Form>
        <div className={`mt-5 ${classes.line}`}>
          <hr />
        </div>
        <p className="text-center pt-4 text-mute">
          Belum punya akun?{' '}
          <Link
            to="/register"
            style={{ color: '#730C07', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Daftar Sekarang
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
