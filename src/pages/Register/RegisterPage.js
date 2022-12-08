import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import AuthService from 'services/AuthService';
import classes from './RegisterPage.module.css';

const authService = new AuthService();

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [part, setPart] = useState(1);
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [type, setType] = useState(false);
  const [confirmType, setConfirmType] = useState(false);
  const navigate = useNavigate();

  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneNumberChangeHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const confirmPasswordChangeHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const showPasswordHandler = () => {
    if (show === false) {
      setShow(true);
      setType(true);
    } else {
      setShow(false);
      setType(false);
    }
  };

  const showConfirmPasswordHandler = () => {
    if (showConfirm === false) {
      setShowConfirm(true);
      setConfirmType(true);
    } else {
      setShowConfirm(false);
      setConfirmType(false);
    }
  };

  const handleNextPart = () => {
    if (
      // eslint-disable-next-line operator-linebreak
      firstName.trim().length === 0 ||
      email.trim().length === 0
    ) {
      alert('Please enter a valid input!');
      return;
    }
    setPart(part + 1);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (
      // eslint-disable-next-line operator-linebreak
      phoneNumber.trim().length === 0 ||
      // eslint-disable-next-line operator-linebreak
      password.trim().length === 0 ||
      confirmPassword.trim().length === 0
    ) {
      alert('Please enter a valid input!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Password does not match');
      return;
    }

    const payload = {
      name: lastName ? `${firstName} ${lastName}` : firstName,
      email,
      password,
      phone: phoneNumber,
    };

    const getData = await authService.register(payload);
    if (getData.code === 400) {
      const passwordError = await getData?.data?.password[0];
      if (passwordError !== undefined) {
        alert(`${getData.message}: ${getData.data.password[0]}`);
        return;
      }
      alert(getData.message);
      return;
    }
    navigate('/login');
  };

  return (
    <section
      className={`container position-absolute top-50 start-50 translate-middle ${classes.register}`}
    >
      <div className="row m-4">
        <Form onSubmit={submitHandler}>
          {part === 1 && (
            <>
              <p className={`pb-1 ${classes.daftar}`}>Daftar Sekarang</p>
              <Form.Group className={`pt-3 pb-2 ${classes.control}`} controlId="firstName">
                <Form.Control
                  type="text"
                  autoComplete="firstName"
                  placeholder="Nama Depan"
                  required
                  value={firstName}
                  onChange={firstNameChangeHandler}
                />
              </Form.Group>
              <Form.Group className={`py-2 ${classes.control}`} controlId="lastName">
                <Form.Control
                  type="text"
                  autoComplete="lastName"
                  placeholder="Nama Belakang"
                  value={lastName}
                  onChange={lastNameChangeHandler}
                />
              </Form.Group>
              <Form.Group className={`pt-2 pb-5 ${classes.control}`} controlId="email">
                <Form.Control
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={emailChangeHandler}
                />
              </Form.Group>
              <Button
                type="button"
                variant="danger"
                className={classes.buttonSignUp}
                onClick={handleNextPart}
              >
                SELANJUTNYA
              </Button>
            </>
          )}
          {part === 2 && (
            <>
              <p
                className={`pb-1 ${classes.kembali}`}
                onClick={() => {
                  setPart(part - 1);
                }}
              >
                <i className="bi bi-arrow-left-short" /> Kembali
              </p>
              <Form.Group className={`pt-3 pb-2 ${classes.control}`} controlId="phoneNumber">
                <Form.Control
                  type="text"
                  autoComplete="phoneNumber"
                  placeholder="Phone Number"
                  minLength="10"
                  maxLength="13"
                  required
                  value={phoneNumber}
                  onChange={phoneNumberChangeHandler}
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
                  value={password}
                  onChange={passwordChangeHandler}
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
              <InputGroup className={`pt-2 pb-5 ${classes.control}`}>
                <Form.Control
                  type={`${confirmType ? 'text' : 'password'}`}
                  autoComplete="current-confirm-password"
                  placeholder="Konfirmasi Password"
                  aria-label="confirmPassword"
                  minLength="8"
                  required
                  value={confirmPassword}
                  onChange={confirmPasswordChangeHandler}
                />
                <Button
                  variant="outline-light"
                  id="confirmPassword"
                  type="button"
                  onClick={showConfirmPasswordHandler}
                >
                  {showConfirm ? 'Hide' : 'Show'}
                </Button>
              </InputGroup>
              <Button type="submit" variant="danger" className={classes.buttonSignUp}>
                SELANJUTNYA
              </Button>
            </>
          )}
        </Form>
        <div className={`mt-5 ${classes.line}`} />
        <p className="text-center pt-4 text-mute">
          Sudah punya akun?{' '}
          <Link
            to="/login"
            style={{ color: '#730C07', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Masuk
          </Link>
        </p>
      </div>
    </section>
  );
};
export default RegisterPage;
