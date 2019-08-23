import React from 'react';
import UserItem from './UserItem';
import { Container, Row } from 'react-bootstrap';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  const userList = users.map(user => <UserItem key={user.id} user={user} />);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Container className='mt-3'>
        <Row>{userList}</Row>
      </Container>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
