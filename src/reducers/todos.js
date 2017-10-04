import {
  TODO_TOGGLE_VISIBILITY,
  TODO_ICON_TOGGLE_VISIBILITY,
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  CLEAR_TODO
} from '../actions/actionTypes';

const initialState = {
  todoIconIsVisible: true,
  todoIsVisible: false,
  items: [
    {
      task: "test task number one",
      completed: false
    },
    {
      task: "test task number two",
      completed: false
    },
    {
      task: "test task number three",
      completed: true
    }
  ]
};

export default (todo = initialState, action) => {
  const newState = Object.assign({}, todo);
  switch(action.type) {
    case TODO_TOGGLE_VISIBILITY:
      return Object.assign({}, newState, {
        todoIsVisible: !todo.todoIsVisible
      });
    case TODO_ICON_TOGGLE_VISIBILITY:
      return Object.assign({}, newState, {
        todoIconIsVisible: !todo.todoIconIsVisible
      });
    case ADD_TODO:
      newState.items.push({
        task: action.task,
        completed: false
      });
      return newState;
    case COMPLETE_TODO:
      newState.items[action.index].completed = true;
      return newState;
    case DELETE_TODO:
      let items = [].concat(newState.items);
      items.splice(action.index, 1);
      return Object.assign({}, newState, {
        items: items
      });
    case CLEAR_TODO:
      return Object.assign({}, newState, {
        items: []
      });
    default:
      return newState;
  }
}
