import { call, put, select, takeLatest } from 'redux-saga/effects';

import { TodoActionTypes, TodoActionCreators } from './Todo.action';

import { getTodoApi, postTodoApi, updateTodoApi, deleteTodoApi } from './Todo.api';


export function* getTodo(action) {
    
    try {
        yield put(TodoActionCreators.getTodo.request());
        const response = call(getTodoApi, action.payload.query);
        yield put(TodoActionCreators.getTodo.success({ response }));
    } catch (error) {
        yield put(TodoActionCreators.getTodo.success({ error }));
    }
    
}

export function* postTodo(action) {
    
    try {
        const { data } = action.payload;
        yield put(TodoActionCreators.postTodo.request());
        const response = call(postTodoApi, data);
        yield put(TodoActionCreators.postTodo.success({ response }))
    } catch (error) {
        yield put(TodoActionCreators.getTodo.success({ error }));
    }
    
}

export function* updateTodo(action) {
    
    try {
        const { id, data } = action.payload;
        yield put(TodoActionCreators.updateTodo.request());
        const response = call(updateTodoApi, { id, data } );
        yield put(TodoActionCreators.updateTodo.success({ response }))
    } catch (error) {
        yield put(TodoActionCreators.getTodo.success({ error }));
    }
}

export function* deleteTodo(action) {
    
    try {
        const { id } = action.payload;
        yield put(TodoActionCreators.deleteTodo.request());
        const response = call(deleteTodoApi, id);
        yield put(TodoActionCreators.deleteTodo.success({ response }))
    } catch (error) {
        yield put(TodoActionCreators.getTodo.success({ error }));
    }
}

export default function *rootSaga() {
    
    yield [
        takeLatest(TodoActionTypes.GET_TODO.INDEX, getTodo),
        takeLatest(TodoActionTypes.POST_TODO.INDEX, postTodo),
        takeLatest(TodoActionTypes.UPDATE_TODO.INDEX, updateTodo),
        takeLatest(TodoActionTypes.DELETE_TODO.INDEX, deleteTodo),
        ]
}