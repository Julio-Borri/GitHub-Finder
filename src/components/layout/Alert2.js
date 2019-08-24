import React from 'react';
import { Alert, Container } from 'react-bootstrap';

const Alert2 = ({ alert }) => {
  return (
    alert !== null && (
      <Container>
        <Alert variant={alert.type}>
          <i className='fas fa-info-circle mr-2'></i>
          {alert.msg}
        </Alert>
      </Container>
    )
  );
};

export default Alert2;
