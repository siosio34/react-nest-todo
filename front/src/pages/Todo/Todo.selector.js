import { createSelector } from 'reselect';
import { initialState } from './Todo.reducer';

const selectTodo = state => state.todos || initialState;

const makeSelectTodoItems = () =>
  createSelector(selectTodo, todoState => todoState.items);
  
const makeSelectTodoLoading = () =>
  createSelector(selectTodo, todoState => todoState.loading);
  
const makeSelectTodoError = () =>
  createSelector(selectTodo, todoState => todoState.error);

export { selectTodo, makeSelectTodoItems, makeSelectTodoLoading, makeSelectTodoError };