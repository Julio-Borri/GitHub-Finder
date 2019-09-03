import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar2 = ({ title }) => {
  return (
    <Navbar bg='danger' variant='dark'>
      <Navbar.Brand>
        <i className='fab fa-github mr-2' />
        <span className='font-weight-bold'>{title}</span>
      </Navbar.Brand>
      <Nav className='ml-auto' variant='dark'>
        <Link to='/' className='mr-3 text-white'>
          Home
        </Link>
        <Link to='/about' className='mr-3 text-white'>
          About
        </Link>
      </Nav>
    </Navbar>
  );
};

Navbar2.defaultProps = {
  title: 'Github Finder'
};

Navbar2.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar2;
