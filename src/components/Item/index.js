import React from 'react';

const Item = ({ data: { text, checked , key, important}, handleCheckedChange, handleImportantButtonChange, handleDeleteItem }) => {    
    const handleCheckboxClick = () => {
        handleCheckedChange(key);
    }

    const renderText = (txt, stroked) => {
        if (stroked) {
            return <s>{ txt }</s>;
        }
        return txt;
    }

    const handleImportantButtonClick = () => {
         handleImportantButtonChange(key);
    }

    const handleDeleteButtonClick = () => {
        handleDeleteItem(key);
    }

    const itemClasses = (important) ? "my-class-name important-item" : "my-class-name" ;
    
    return (
        <div className={itemClasses}>
            <input type='checkbox' checked={checked} onClick={handleCheckboxClick} />
            <span className="element-list">
                { renderText(text, checked) }
            </span>
            <button disabled={important} onClick={handleImportantButtonClick} >Important</button>
            <button className="delete-button" onClick={handleDeleteButtonClick}>Delete</button>
        </div> 
    )
}

export default Item;