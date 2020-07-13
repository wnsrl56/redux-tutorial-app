import React from 'react';
import {useDispatch} from "react-redux";
import {filterActionList, filterActionCreator} from "./state/action";

const TodoFilter = () => {
    const { CHANGE_FILTER } = filterActionList;
    const dispatch = useDispatch();
    const filterActions = {
        getAllItems: () => {dispatch(filterActionCreator(CHANGE_FILTER, {type: 'ALL'}))},
        getCompletedItems: () => {dispatch(filterActionCreator(CHANGE_FILTER, {type: 'COMPLETED'}))},
        getUnCompletedItems: () => {dispatch(filterActionCreator(CHANGE_FILTER, {type: 'UNCOMPLETED'}))}
    };
    return (
        <div>
            <button onClick={() => filterActions.getAllItems()}>All</button>
            <button onClick={() => filterActions.getCompletedItems()}>Completed</button>
            <button onClick={() => filterActions.getUnCompletedItems()}>Uncompleted</button>
        </div>
    );
}

export default TodoFilter;
