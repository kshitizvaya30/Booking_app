import React, { useState, useEffect } from 'react';
import { Button } from '../Buttons/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            BOOKers
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/shows'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Book Tickets
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/history'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                History
              </Link>
            </li>

            <li>
              <Link
                to='/cart'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Cart
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' link="/cart">Cart</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;