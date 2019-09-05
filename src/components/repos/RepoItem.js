import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

const RepoItem = ({ repo }) => {
  return (
    <Container>
      <Row className='border my-1'>
        <Col className='py-1'>
          <h5>
            <a
              href={repo.html_url}
              style={{ color: 'black', fontWeight: '400' }}
            >
              {repo.name}
            </a>
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
