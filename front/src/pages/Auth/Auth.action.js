import { makeAsyncActionTypes, makeActionCreator, makeAsyncActionCreator } from 'Utils/actionHelper';

export const AuthActionTypes = {
    SIGNIN: makeAsyncActionTypes('SIGNIN'),
    SIGNUP: makeAsyncActionTypes('SIGNUP'),
    SIGNOUT: makeAsyncActionTypes('SIGNOUT),
    SET_TOKEN: makeAsyncActionTypes('SET_TOKEN'),
    GET_TOKEN: makeAsyncActionTypes('GET_TOKEN'),
}

export const AuthActionCreators = {
    signin: makeAsyncActionCreator(AuthActionTypes.SIGNIN),
    signup: makeAsyncActionCreator(AuthActionTypes.SIGNUP),
    signout: makeAsyncActionCreator(AuthActionTypes.SIGNOUT),
}

export default {
    AuthActionTypes,
    AuthActionCreators,
}