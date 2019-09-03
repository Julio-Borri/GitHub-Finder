import React from 'react';
import { Image, Button, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
          <Link to={`/user/${login}`} className='btn btn-dark btn-sm mb-1'>
            More
          </Link>
        </div>
      </div>
    </Col>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired // ptor (ES7 extension)
};

export default UserItem;
