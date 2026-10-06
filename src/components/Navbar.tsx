import React, { useEffect, useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className={`navbar ${scrolled ? 'scrolled' : ''} ${open ? 'open' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home">
          <span className="brand-mark">JB</span>
          Jake Buhite
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-controls="nav-links"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
        </button>
        <ul className="nav-links" id="nav-links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a className="nav-link" href={href} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
