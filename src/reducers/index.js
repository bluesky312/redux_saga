import {combineReducers} from 'redux';
import * as types from '../constants/index'

const messages = (state = [], action) => {
    switch (action.type) {
        case types.ADD_MESSAGE:
            return state;
        case types.SHOW_MESSAGE:
            return {
                message: action.message,
                author: action.author
            };
        default:
            return state
    }
};

export default combineReducers({
    messages
})