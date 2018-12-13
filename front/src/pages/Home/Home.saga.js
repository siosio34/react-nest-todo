import { call, put, select, takeLatest } from 'redux-saga/effects';

import { HomeActionTypes, HomeActionCreators } from './Home.action';

import request from 'Utils/request';

export function* getHome() {
    console.log('으에에에에에');
    yield put(HomeActionCreators.getHome.request());
    
}

export function* postHome() {
    
}
export default function *rootSaga() {
    yield [
        takeLatest(HomeActionTypes.GET_HOME.INDEX, getHome),
        takeLatest(HomeActionTypes.POST_HOME.INDEX, postHome)
        ]
}