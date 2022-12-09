import React, { useRef, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import AuthService from 'services/AuthService';
import { setUser } from 'store/authReducer';
import classes from './LoginPage.module.css';

const authService = new AuthService();

const LoginPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');
  const [type, setType] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (enteredEmail.trim().length === 0 || enteredPassword.trim().length === 0) {
      alert('Please enter a valid input username/password.');
    }

    const payload = {
      email: enteredEmail,
      password: enteredPassword,
    };

    const getData = await authService.login(payload);
    if (getData.code === 400) {
      const passwordError = await getData?.data?.password[0];
      if (passwordError !== undefined) {
        alert(`${getData.message}: ${getData.data.password[0]}`);
        return;
      }
      alert(getData.message);
      return;
    }
    if (getData.code === 404) {
      alert(getData.message);
      return;
    }
    localStorage.setItem('token', getData.data.token);
    dispatch(setUser());
    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';
    navigate('/profile');
  };

  return (
    <section
      className={`container position-absolute top-50 start-50 translate-middle ${classes.login}`}
    >
      <div className="row m-4">
        <p className={`pb-1 ${classes.masuk}`}>Masuk</p>
        <Form onSubmit={submitHandler}>
          <Form.Group className={`py-3 ${classes.control}`} controlId="email">
            <Form.Control
              type="email"
              autoComplete="email"
              placeholder="Email"
              required
              ref={emailInputRef}
            />
          </Form.Group>
          <InputGroup className={`py-2 ${classes.control}`}>
            <Form.Control
              type={`${type ? 'text' : 'password'}`}
              autoComplete="current-password"
              placeholder="Password"
              aria-label="password"
              minLength="8"
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
        <div className={`mt-5 ${classes.line}`} />
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
