import { makeAsyncActionTypes, makeActionCreator, makeAsyncActionCreator } from 'Utils/actionHelper';

export const TodoActionTypes = {
    GET_TODO: makeAsyncActionTypes('GET_TODO'),
    POST_TODO: makeAsyncActionTypes('POST_TODO'),
    UPDATE_TODO: makeAsyncActionTypes('UPDATE_TODO'),
    DELETE_TODO: makeAsyncActionTypes('DELETE_TODO'),
}

export const TodoActionCreators = {
    getTodo: makeAsyncActionCreator(TodoActionTypes.GET_TODO),
    postTodo: makeAsyncActionCreator(TodoActionTypes.POST_TODO),
    updateTodo: makeAsyncActionCreator(TodoActionTypes.UPDATE_TODO),
    deleteTodo:  makeAsyncActionCreator(TodoActionTypes.DELETE_TODO),
}

export default {
    TodoActionTypes,
    TodoActionCreators,
}