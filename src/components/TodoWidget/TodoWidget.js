import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleTodoVisibility } from '../../actions/todoActions';

import Widget from '../common/Widget';
import TodoIcon from './TodoIcon';
import TodoModal from './TodoModal';

const TodoWidget = ({todos, onIconClick}) => {
  const {todoIconIsVisible, todoIsVisible, items} = todos;

  const renderIcon = () => {
    return todoIconIsVisible ?
      <TodoIcon
        onIconClick={onIconClick}
      />
      : null;
  };

  const renderModal = () => {
    return todoIsVisible ? <TodoModal todos={items} /> : null;
  };

  return (
    <Widget
      yPosition="bottom"
      xPosition="right"
    >
      {renderModal()}
      {renderIcon()}
    </Widget>
  );
};

TodoWidget.propTypes = {
  onIconClick: PropTypes.func.isRequired
};

function mapStateToProps({todos}) {
  return {todos};
}

function mapDispatchToProps(dispatch) {
  return {
    onIconClick: () => {
      dispatch(toggleTodoVisibility());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoWidget);
