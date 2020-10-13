import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import List from '../List';

const FILTER_STATUS = {
    ALL: 'ALL',
    ACTIVE: 'ACTIVE',
    COMPLITED: 'COMPLITED',
    IMPORTANT: 'IMPORTANT'
}

const filterList = (currentFilterStatus, list) => {
    switch (currentFilterStatus) {
        case (FILTER_STATUS.ALL): {
            return list;
        }
        case (FILTER_STATUS.ACTIVE): {
            return list.filter((task) => !task.checked);
        }
        case (FILTER_STATUS.COMPLITED): {
            return list.filter((task) => task.checked);
        }
        case (FILTER_STATUS.IMPORTANT): {
            return list.filter((task) => task.important);
        }
        default: {
            return list;
        }            
    }
}

const TasksFilter = (props) => {
    const { list } = props;
    const [currentFilterStatus, setCurrentFilterStatus] = useState(FILTER_STATUS.ALL);
    
    const showAllList = () => {
        setCurrentFilterStatus(FILTER_STATUS.ALL);
    }

    const showActiveList = () => {
        setCurrentFilterStatus(FILTER_STATUS.ACTIVE);
    }

    const showComplitedList = () => {
        setCurrentFilterStatus(FILTER_STATUS.COMPLITED);
    }

    const showImportantList = () => {
        setCurrentFilterStatus(FILTER_STATUS.IMPORTANT);
    }

    const filteredList = filterList(currentFilterStatus, list);
    
    const ButtonAllClasses = FILTER_STATUS.ALL === currentFilterStatus ? "active-filter-button" : ""; 
    const ButtonActiveClasses = FILTER_STATUS.ACTIVE === currentFilterStatus ? "active-filter-button" : ""; 
    const ButtonComplitedClasses = FILTER_STATUS.COMPLITED === currentFilterStatus ? "active-filter-button" : ""; 
    const ButtonImportantClasses = FILTER_STATUS.IMPORTANT === currentFilterStatus ? "active-filter-button" : ""; 

    return (
        <div className="wraper-all">
            <h1>todos</h1>
            <div>
                <button className = {ButtonAllClasses}       onClick={showAllList}>All</button>
                <button className = {ButtonActiveClasses}    onClick={showActiveList}>Active</button>
                <button className = {ButtonComplitedClasses} onClick={showComplitedList}>Complited</button>
                <button className = {ButtonImportantClasses} onClick={showImportantList}>Important</button>
            </div>
            <List list={filteredList} className="list"/> 
        </div>
    );
}

TasksFilter.propTypes = {
    list: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({ list: state });

export default connect(mapStateToProps)(TasksFilter);