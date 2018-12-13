import { makeAsyncActionTypes, makeActionCreator, makeAsyncActionCreator } from 'Utils/actionHelper';

export const HomeActionTypes = {
    GET_HOME: makeAsyncActionTypes('GET_HOME'),
    POST_HOME: makeAsyncActionTypes('POST_HOME'),
    UPDATE_HOME: makeAsyncActionTypes('UPDATE_HOME'),
    DELETE_HOME: makeAsyncActionTypes('DELETE_HOME'),
}

export const HomeActionCreators = {
    getHome: makeAsyncActionCreator(HomeActionTypes.GET_HOME),
    postHome: makeAsyncActionCreator(HomeActionTypes.POST_HOME),
    updateHome: makeAsyncActionCreator(HomeActionTypes.UPDATE_HOME),
    deleteHome:  makeAsyncActionCreator(HomeActionTypes.DELETE_HOME),
}

export default {
    HomeActionTypes,
    HomeActionCreators,
}