import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';

const Item = ({ data: { text, checked , key, important, createdAt }, handleCheckedChange, handleImportantButtonChange, handleDeleteItem }) => {
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

    const itemClasses = (important) ? "item important-item" : "item" ;
    
    return (
        <div className={itemClasses}>
            <div>
                <input type='checkbox' checked={checked} onChange={handleCheckboxClick} />
                <span className="element-list">
                    { renderText(text, checked) }
                </span>
            </div>
            <div>
                <span className="created-at">
                    {dateFormat(createdAt, "h:MM")}
                </span>
                <button disabled={important} onClick={handleImportantButtonClick} >Important</button>
                <button className="delete-button" onClick={handleDeleteButtonClick}>Delete</button>
            </div>
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