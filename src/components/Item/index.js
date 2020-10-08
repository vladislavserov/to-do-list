import React from 'react';
import PropTypes from 'prop-types';

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
            <input type='checkbox' checked={checked} onChange={handleCheckboxClick} />
            <span className="element-list">
                { renderText(text, checked) }
            </span>
            <button disabled={important} onClick={handleImportantButtonClick} >Important</button>
            <button className="delete-button" onClick={handleDeleteButtonClick}>Delete</button>
        </div> 
    )
}

Item.propTypes = {
    data: PropTypes.shape({
        text: PropTypes.string.isRequired, 
        checked: PropTypes.bool.isRequired,
        key: PropTypes.string.isRequired, 
        important: PropTypes.bool.isRequired,
    }),
    handleCheckedChange: PropTypes.func.isRequired,
    handleImportantButtonChange: PropTypes.func.isRequired,
    handleDeleteItem: PropTypes.func.isRequired,
}

export default Item;