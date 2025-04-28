import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../component/Navbar.css';
import { useCart } from 'react-use-cart';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
  const { totalItems } = useCart();

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const Admin=localStorage.getItem('Login')

  return (
    <nav className="navbar navbar-expand-lg navmain fixed-top" data-aos="zoom-in">
      <div className="container-fluid px-4">
        <Link className="navbar-brand logo" to="/">
          SURPRISE <FontAwesomeIcon icon={faGift} style={{ color: '#d81b60' }} /> HUB
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ullist">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>GIFTS</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/mainsurprise" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>SURPRISES</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/gallery" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>GALLERY</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>CONTACT</NavLink>
            </li>



        {Admin=='Admin@gmail.com' && <li className="nav-item">
              <NavLink to="/Admin" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>ADMIN</NavLink>
            </li> }    
            <li className="nav-item position-relative">
              <NavLink to="/cart" className="nav-link">
                <FontAwesomeIcon className="carti" icon={faCartShopping} size="lg" />
                <span className="carticon">{totalItems}</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>
                <FaUserPlus size={'25px'} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
