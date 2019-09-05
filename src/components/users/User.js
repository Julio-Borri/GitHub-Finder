import React, { Component } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.array.isRequired
  };

  render() {
    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading, repos } = this.props;

    if (loading) return <Spinner />;

    return (
      <React.Fragment>
        <Container className='my-2'>
          <Row>
            <Col>
              <Link to='/' className='btn btn-light btn-sm m-2'>
                Back to Search
              </Link>
              <span className='m-2'>
                Hireable: {''}
                {hireable ? (
                  <i className='fas fa-check text-success' />
                ) : (
                  <i className='fas fa-times-circle text-danger' />
                )}
              </span>
            </Col>
          </Row>

          <Row className='my-1 p-3 border'>
            <Col xs={6} className='text-center'>
              <img
                src={avatar_url}
                className='rounded-circle'
                alt=''
                style={{ width: '150px' }}
              />
              <h1>{name}</h1>
              <p>Location: {location}</p>
            </Col>
            <Col xs={6}>
              {bio && (
                <React.Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </React.Fragment>
              )}
              <Button variant='dark' href={html_url}>
                Visit GitHub Profile
              </Button>
              <ul className='mt-2 list-unstyled'>
                <li>
                  {login && <React.Fragment>Username: {login}</React.Fragment>}
                </li>
                <li>
                  {company && (
                    <React.Fragment>Company: {company}</React.Fragment>
                  )}
                </li>
                <li>
                  {blog && <React.Fragment>Website: {blog}</React.Fragment>}
                </li>
              </ul>
            </Col>
          </Row>
          <Row className='border p-2'>
            <Col className='text-center'>
              <Badge className='mx-1 p-1' variant='primary'>
                Followers: {followers}
              </Badge>
              <Badge className='mx-1 p-1' variant='success'>
                Following: {following}
              </Badge>
              <Badge className='mx-1 p-1' variant='danger'>
                Public Repos: {public_repos}
              </Badge>
              <Badge className='mx-1 p-1' variant='dark'>
                Public Gits: {public_gists}
              </Badge>
            </Col>
          </Row>
        </Container>
        <Repos repos={repos} />
      </React.Fragment>
    );
  }
}

export default User;
