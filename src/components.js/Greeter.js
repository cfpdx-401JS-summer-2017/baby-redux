import React from 'react';
import PropTypes from 'prop-types';

function Greeter() {
  Greeter.propTypes = {
    salutation: PropTypes.string,
    name: PropTypes.string
  }


  return (
    <div>
      <span>{salutation}</span>
      <span>{name}</span>!
    </div>
  );
}

export default Greeter;
