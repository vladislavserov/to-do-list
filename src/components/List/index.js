import React, { useState } from 'react';
import { uniqueId } from 'lodash';
import Item from '../Item';


const List = () => {
    const [ list, setList] = useState([]);
    
    const handleCheckedChange = (key) => {
        const newList = [...list];
        const index = newList.findIndex((element) => element.key === key);
        if (index === -1) {
            return;
        }
        newList[index].checked = !newList[index].checked;
        setList(newList);
    }

    const handleImportantButtonChange = (key) => {
        const newList = [...list];
        const index = newList.findIndex((element) => element.key === key);
        if (index === -1) {
            return;
        }
        newList[index].important = !newList[index].important;
        setList(newList);
    }

    const handleDeleteItem = (key) => {
        const newList = [...list];
        const result = newList.filter(item => item.key !== key);
        setList(result);
    }

    const inputRef = React.createRef();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleAddTask();
        }
    }

    const handleAddTask = () => {
        const inputElement = inputRef.current;
        const text = inputElement.value;
        inputElement.value = "";

        const newItem = {text, checked: false, key: uniqueId("item-"), important: false}
        const newList = [...list, newItem];
        setList(newList);
    }
    
    return (
        <>
            { 
                list.map((value) => 
                    <Item   key={value.key}
                            data={value} 
                            handleCheckedChange={handleCheckedChange} 
                            handleImportantButtonChange={handleImportantButtonChange} 
                            handleDeleteItem={handleDeleteItem}/>
                )
            }
            <input ref={inputRef} onKeyDown={handleKeyDown} />
            <button onClick={handleAddTask}>Add</button>
        </>
    )
}

export default List;