import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './StartingPage.module.css';

const StartingPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className={`${classes.heading_container} ${classes.heading_center}`}>
      <h2>Welcome to E-commerce React Mock-up</h2>

      {!isAuthenticated && (
        <p>
          Please{' '}
          <Link to="/register" className="text-decoration-underline">
            register
          </Link>{' '}
          or{' '}
          <Link to="/login" className="text-decoration-underline">
            login
          </Link>{' '}
          and buy your stuff!
        </p>
      )}
      {isAuthenticated && (
        <p>
          You&apos;re login!! Let&apos;s check our{' '}
          <Link to="/product-list" className="text-decoration-underline">
            product list
          </Link>
          ...
        </p>
      )}
    </div>
  );
};

export default StartingPage;
