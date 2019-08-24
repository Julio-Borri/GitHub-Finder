import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value }); // [] uses as a key

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <Container className='my-3 px-2'>
        <Form onSubmit={this.onSubmit}>
          <Form.Control
            type='text'
            name='text'
            placeholder='Serach Users..'
            className='my-2'
            value={this.state.text}
            onChange={this.onChange}
          />
          <Button variant='dark' type='submit' block size='sm'>
            Search
          </Button>
        </Form>
        {showClear && (
          <Button
            variant='light'
            size='sm'
            className='my-2'
            block
            onClick={clearUsers}
          >
            Clear
          </Button>
        )}
      </Container>
    );
  }
}

export default Search;
