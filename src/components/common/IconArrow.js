import React from 'react';
import PropTypes from 'prop-types';

import './IconArrow.css';

const IconArrow = ({hidden}) => {
  return (
    <div
      className="icon-arrow"
      style={{visibility: hidden ? "hidden" : "visible"}}
    >
      <i className="fa fa-angle-up" />
    </div>
  );
};

IconArrow.propTypes = {
  hidden: PropTypes.bool.isRequired
};

export default IconArrow;
