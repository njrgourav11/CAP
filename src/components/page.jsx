import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style';

const PageNotFound = () => {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-black-gradient ${styles.paddingY}`}>
      <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="mt-4 text-2xl text-white">Page Not Found</p>
      <Link to="/" className="mt-6 text-lg text-cyan-400 underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
