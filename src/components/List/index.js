import React from 'react';
import { connect } from 'react-redux'
import Item from '../Item';
import { add_todo_item, delete_todo_item, toggle_checked, toggle_important } from '../../store/actions';


const List = (props) => {
    const { list, dispatch } = props;

    const handleCheckedChange = (key) => {
        dispatch(toggle_checked(key));
    }

    const handleImportantButtonChange = (key) => {
        dispatch(toggle_important(key));
    }

    const handleDeleteItem = (key) => {
        dispatch(delete_todo_item(key));
    }

    const inputRef = React.createRef();

    const handleAddTask = () => {
        const inputElement = inputRef.current;
        const text = inputElement.value;
        inputElement.value = "";

        dispatch(add_todo_item(text))    
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleAddTask();
        }
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
    );
}

const mapStateToProps = (state) => ({ list: state });

export default connect(mapStateToProps)(List);