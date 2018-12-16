import { call, put, select, takeLatest } from 'redux-saga/effects';

import { TodoActionTypes, TodoActionCreators } from './Todo.action';

import request from 'Utils/request';

export function* getTodo(action) {
    
    yield put(TodoActionCreators.getTodo.request());
    
    try {
        
    } catch (error) {
        
    }
    
}

export function* postTodo(action) {
    
    yield put(TodoActionCreators.postTodo.request());
    
    try {
        
    } catch (error) {
        
    }
    
}

export function* editTodo(action) {
    yield put(TodoActionCreators.editTodo.request());
    
    try {
        
    } catch (error) {
        
    }
}

export function* deleteTodo(action) {
    yield put(TodoActionCreators.deleteTodo.request());
    
    try {
        
    } catch (error) {
        
    }
}

export default function *rootSaga() {
    yield [
        takeLatest(TodoActionTypes.GET_TODO.INDEX, getTodo),
        takeLatest(TodoActionTypes.POST_TODO.INDEX, postTodo),
        takeLatest(TodoActionTypes.EDIT_TODO.INDEX, editTodo),
        takeLatest(TodoActionTypes.DELETE_TODO.INDEX, deleteTodo),
        
        ]
}