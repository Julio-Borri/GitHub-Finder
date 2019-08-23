import React from 'react';
import { Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Navbar2 = ({ title }) => {
  return (
    <Navbar bg='danger' variant='dark'>
      <Navbar.Brand>
        <i className='fab fa-github mr-2' />
        <span className='font-weight-bold'>{title}</span>
      </Navbar.Brand>
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
