import {ADD_MESSAGE, SHOW_MESSAGE} from "../constants/index";

export const addMessage = (message, author) => ({
    type: ADD_MESSAGE,
    message,
    author
});

// export const addMessage = {
//     type: ADD_MESSAGE,
//     message: '',
//     author: ''
// };

export const showMessage = (message, author) => ({
    type: SHOW_MESSAGE,
    message,
    author
});