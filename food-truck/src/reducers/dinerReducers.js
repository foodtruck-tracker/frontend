import { FETCH_DINERS, NEW_DINER } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_DINERS:
        return {
            ...state,
            items: action.payload
        }
            case NEW_DINER:
            return {
            ...state,
            item: action.payload
        }

        default:
        return state;
    }
}