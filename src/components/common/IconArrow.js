import React from 'react';
import PropTypes from 'prop-types';

import './IconArrow.css';

const IconArrow = ({hidden, arrowOffset}) => {
  const styles = {
    visibility: hidden ? "hidden" : "visible",
    paddingRight: arrowOffset ? `${arrowOffset}em` : "0"
  }
  return (
    <div
      className="icon-arrow"
      style={styles}
    >
      <i className="fa fa-angle-up" />
    </div>
  );
};

IconArrow.propTypes = {
  hidden: PropTypes.bool.isRequired,
  arrowOffset: PropTypes.number
};

export default IconArrow;
