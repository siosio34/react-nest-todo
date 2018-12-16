import { call, put, select, takeLatest } from 'redux-saga/effects';

import { AuthActionTypes, AuthActionCreators } from './Auth.action';

import request from 'Utils/request';

export function* signInSaga() {
    
}

export function* signUpSaga() {
    
}

export function* signoutSaga() {
    
}

export default function *rootSaga() {
    yield [
        takeLatest(AuthActionTypes.GET_HOME.INDEX, getHome),
        takeLatest(AuthActionTypes.POST_HOME.INDEX, postHome)
        ]
}