import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <span>&copy; {new Date().getFullYear()} Jake Buhite</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
};

export default Footer;
