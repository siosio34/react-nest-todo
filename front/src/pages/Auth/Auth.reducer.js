import { AuthActionTypes } from './Home.action'

export const initialState = {
    loading: false,
    error: false,
    currentUser: {},
    accessToken: '',
}

export default function homeReducer(state = initialState, action) {
    switch (action.type) {
    case AuthActionTypes.SIGNIN.INDEX:
    case AuthActionTypes.SIGNUP.INDEX:
    case AuthActionTypes.SIGNOUT.INDEX:
        return state;
    case AuthActionTypes.SIGNIN.REQUEST:
    case AuthActionTypes.SIGNUP.REQUEST:
    case AuthActionTypes.SIGNOUT.REQUEST:
        return {
            ...state,
            loading: true
        }
    case AuthActionTypes.SIGNIN.SUCCESS:
    case AuthActionTypes.SIGNUP.SUCCESS:
    case AuthActionTypes.SIGNOUT.SUCCESS:
        return {
            ...state,
            loading: false,
            error: false
        }
    case AuthActionTypes.SIGNIN.FAILURE:
    case AuthActionTypes.SIGNUP.FAILURE:
    case AuthActionTypes.SIGNOUT.FAILURE:
        return {
            ...state,
            loading: false,
            error: true
        }
        break;
    default:
        return state;
    }
    
}

