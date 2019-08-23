import React from 'react';
import { Image, Button, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // Destructuring
  // * const { login, avatar_url, html_url } = props.user; lo meto como parámetro de la función

  return (
    <Col xs={12} md={4}>
      <div className='text-center border p-1 m-1'>
        <Image
          src={avatar_url}
          alt=''
          style={{ width: '60px' }}
          roundedCircle
        />
        <h3>{login}</h3>
        <div>
          <Button href={html_url} variant='dark' size='sm' className='my-1'>
            More
          </Button>
        </div>
      </div>
    </Col>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired // ptor (ES7 extension)
};

export default UserItem;
