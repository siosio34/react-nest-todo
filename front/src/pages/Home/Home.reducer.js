import { HomeActionTypes } from './Home.action'

export const initialState = {
    loading: false,
    error: false,
    items: []
}

export default function homeReducer(state = initialState, action = {payload: {
    items: []
}}) {
    switch (action.type) {
    case HomeActionTypes.GET_HOME.INDEX:
    case HomeActionTypes.POST_HOME.INDEX:
    case HomeActionTypes.UPDATE_HOME.INDEX:
    case HomeActionTypes.DELETE_HOME.INDEX:
        return state;
    case HomeActionTypes.GET_HOME.REQUEST:
    case HomeActionTypes.POST_HOME.REQUEST:
    case HomeActionTypes.UPDATE_HOME.REQUEST:
    case HomeActionTypes.DELETE_HOME.REQUEST:
        return {
            ...state,
            loading: true
        }
    case HomeActionTypes.GET_HOME.SUCCESS:
    case HomeActionTypes.POST_HOME.SUCCESS:
    case HomeActionTypes.UPDATE_HOME.SUCCESS:
    case HomeActionTypes.DELETE_HOME.SUCCESS:
        return {
            ...state,
            items: action.payload || [],
            loading: false,
            error: false
        }
    case HomeActionTypes.GET_HOME.FAILURE:
    case HomeActionTypes.POST_HOME.FAILURE:
    case HomeActionTypes.UPDATE_HOME.FAILURE:
    case HomeActionTypes.DELETE_HOME.FAILURE:
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

