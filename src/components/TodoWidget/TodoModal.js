import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../common/Modal';
import TodoItem from './TodoItem';

import './TodoModal.css';

const TodoModal = ({todos, onComplete}) => {
  let noTodos = todos.length === 0 ? <li className="noTodos"><p>No items on your Todo List!</p></li> : null;
  let todoItems;
  if (noTodos === null) {
    todoItems = todos.map((todo) => {
      return (
        <TodoItem
          task={todo}
          onComplete={onComplete}
        />
      );
    });
  } else {
    todoItems = noTodos;
  }
  return (
    <Modal header="To-Do List">
      <ul className="todoList">
        {todoItems}
      </ul>
    </Modal>
  );
};

TodoModal.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoModal;
