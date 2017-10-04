import React from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';

const TodoItem = ({onIconClick, children}) => {
  return (
    <div className="Task">
      <i className="fa fa-check"></i>
      {children}
    </div>
  );
};

TodoItem.propTypes = {
  onIconClick: PropTypes.func,
};

export default TodoItem;
