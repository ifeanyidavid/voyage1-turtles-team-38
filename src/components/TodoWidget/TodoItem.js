import React from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';

const TodoItem = ({onComplete, task}) => {
  console.log(task);
  return (
    <li className="task">
      <i
        className={task.completed ? "fa fa-check complete" : "fa fa-check"}
        onClick={onComplete}
      ></i>
      <p>{task.task}</p>
    </li>
  );
};

TodoItem.propTypes = {
  onComplete: PropTypes.func.isRequired
};

export default TodoItem;
