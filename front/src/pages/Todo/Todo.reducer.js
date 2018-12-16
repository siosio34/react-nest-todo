import { TodoActionTypes } from './Todo.action'

export const initialState = {
    loading: false,
    error: false,
    items: []
}

export default function todoReducer(state = initialState, action = {payload: {
    items: []
}}) {
    switch (action.type) {
    case TodoActionTypes.GET_TODO.INDEX:
    case TodoActionTypes.POST_TODO.INDEX:
    case TodoActionTypes.UPDATE_TODO.INDEX:
    case TodoActionTypes.DELETE_TODO.INDEX:
        return state;
    case TodoActionTypes.GET_TODO.REQUEST:
    case TodoActionTypes.POST_TODO.REQUEST:
    case TodoActionTypes.UPDATE_TODO.REQUEST:
    case TodoActionTypes.DELETE_TODO.REQUEST:
        return {
            ...state,
            loading: true
        }
    case TodoActionTypes.GET_TODO.SUCCESS:
    case TodoActionTypes.POST_TODO.SUCCESS:
    case TodoActionTypes.UPDATE_TODO.SUCCESS:
    case TodoActionTypes.DELETE_TODO.SUCCESS:
        return {
            ...state,
            items: action.payload || [],
            loading: false,
            error: false
        }
    case TodoActionTypes.GET_TODO.FAILURE:
    case TodoActionTypes.POST_TODO.FAILURE:
    case TodoActionTypes.UPDATE_TODO.FAILURE:
    case TodoActionTypes.DELETE_TODO.FAILURE:
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

