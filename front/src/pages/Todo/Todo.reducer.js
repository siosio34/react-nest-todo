import { TodoActionTypes } from './Todo.action'

export const initialState = {
    loading: false,
    error: false,
    items: [],
    createTodo: {
        title: '',
        description: '우왕',
    },
}

export default function todoReducer(state = initialState, action) {

    switch (action.type) {
    case TodoActionTypes.CHANGE_TODO_TITLE:
        console.log('action', action);
        return {
            ...state,
            createTodo: {
                ...state.createTodo,
                title: action.payload,
            }
        }
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
        return {
            ...state,
            items: action.payload.response.todos || [],
            loading: false,
            error: false
        }
    case TodoActionTypes.POST_TODO.SUCCESS:
    case TodoActionTypes.UPDATE_TODO.SUCCESS:
    case TodoActionTypes.DELETE_TODO.SUCCESS:

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

