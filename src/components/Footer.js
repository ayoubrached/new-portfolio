import React from 'react';

// DEVELOPER: Ayoub Rached, IS117-002, Spring 2025

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <span className="text-muted">
          &copy; {currentYear} Ayoub Rached. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer; 