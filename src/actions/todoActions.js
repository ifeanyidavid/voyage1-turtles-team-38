import {
  TODO_TOGGLE_VISIBILITY,
  TODO_ICON_TOGGLE_VISIBILITY,
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  CLEAR_TODO
} from './actionTypes';

export function toggleTodoVisibility() {
  return {
    type: TODO_TOGGLE_VISIBILITY
  };
}

export function toggleTodoIconVisibility() {
  return {
    type: TODO_ICON_TOGGLE_VISIBILITY
  };
}

export function addTodo(message) {
  return {
    type: ADD_TODO,
    message: message,
    completed: false
  };
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index: index
  };
}

export function deleteTodo(index) {
  return {
    type: DELETE_TODO,
    index: index
  };
}

export function clearTodo() {
  return {
    type: CLEAR_TODO
  };
}
