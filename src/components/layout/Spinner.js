import React, { Fragment } from 'react';
import spinner from './spinner.gif';
import { Image } from 'react-bootstrap';

const Spinner = () => (
  <Fragment>
    <Image
      src={spinner}
      alt='loading...'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </Fragment>
);

export default Spinner;
