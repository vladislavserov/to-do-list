// 

// action: {type: 'ADD_TODO_ITEM', text: "my new item"}
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const add_todo_item = (text) => ({ type: ADD_TODO_ITEM, text });
//  store.dispatch(add_todo_item("moi todo item"))
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export const delete_todo_item = (key) => ({ type: DELETE_TODO_ITEM, key });

export const TOGGLE_CHECKED = 'TOGGLE_CHECKED';
export const toggle_checked = (key) => ({ type: TOGGLE_CHECKED, key});

export const TOGGLE_IMPORTANT = 'TOGGLE_IMPORTANT';
export const toggle_important = (key) => ({ type: TOGGLE_IMPORTANT, key});