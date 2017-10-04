import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../common/Modal';
import TodoItem from './TodoItem';

import './TodoModal.css';

const TodoModal = ({todos}) => {
  return (
    <Modal header="To-Do List">
      {todos.length === 0 ? <p className="noTodos">No items on your Todo List!</p> : (
        <div className="todoList">
          <TodoItem tasks={todos} />
        </div>
      )}
    </Modal>
  );
};

TodoModal.propTypes = {
  todos: PropTypes.object.isRequired
};

export default TodoModal;
