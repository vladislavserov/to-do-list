import {ADD_TODO_ITEM, DELETE_TODO_ITEM, TOGGLE_CHECKED, TOGGLE_IMPORTANT} from './actions';
import { uniqueId } from 'lodash';

export const listReducer = function(state = [
    {text: 'Сделать курсач', key: uniqueId("item-"), important: false, checked: true, createdAt: new Date()},
    {text: 'Убрать дома', key: uniqueId("item-"), important: false, checked: true, createdAt: new Date()},
    {text: 'Помыть пса', key: uniqueId("item-"), important: false, checked: false, createdAt: new Date()},
    {text: 'Найти работу', key: uniqueId("item-"), important: true, checked: false, createdAt: new Date()},
], action) {
    switch (action.type) {
        case ADD_TODO_ITEM:
            return [...state, {text: action.text, key: uniqueId("item-"), important: false, checked: false, createdAt: new Date()}]
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
