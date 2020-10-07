import {ADD_TODO_ITEM, DELETE_TODO_ITEM, TOGGLE_CHECKED, TOGGLE_IMPORTANT} from './actions';
import { uniqueId } from 'lodash';

export const listReducer = function(state = [
    {text: '1111', key: uniqueId("item-"), important: true, checked: false},
    {text: 'adfadf', key: uniqueId("item-"), important: false, checked: true},
    {text: 'asdfasdfas', key: uniqueId("item-"), important: true, checked: true},
    {text: 'asdfasdfas', key: uniqueId("item-"), important: false, checked: false},
    {text: 'asdfasdf', key: uniqueId("item-"), important: true, checked: false},
    {text: 'asdfsadfasdfqwret', key: uniqueId("item-"), important: false, checked: true},

], action) {
    switch (action.type) {
        case ADD_TODO_ITEM:
            return [...state, {text: action.text, key: uniqueId("item-"), important: false, checked: false}]
        case DELETE_TODO_ITEM:
            return [...state].filter(item => item.key !== action.key);
        case TOGGLE_IMPORTANT: {
            const newList = [...state];
            const index = newList.findIndex((item) => item.key === action.key);
            if (index === -1) {
                return state;
            } 
            newList[index].important = !newList[index].important;
            return newList;
        }
        case TOGGLE_CHECKED: {
            const newList = [...state];
            const index = newList.findIndex((item) => item.key === action.key);
            if (index === -1) {
                return state;
            } 
            newList[index].checked = !newList[index].checked;
            return newList;
        }
        default: 
            return state;
    }
}
