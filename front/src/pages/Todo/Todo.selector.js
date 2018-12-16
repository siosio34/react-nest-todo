import { createSelector } from 'reselect';
import { initialState } from './Todo.reducer';

const selectTodo = state => state.get('todo', initialState);

const makeSelectTodoItems = () =>
  createSelector(selectTodo, todoState => todoState.get('items'));

export { selectTodo, makeSelectTodoItems };