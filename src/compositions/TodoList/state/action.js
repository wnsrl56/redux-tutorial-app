import {actionCreator} from "../../../redux/actions";

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const TOGGLE_UPDATE_TODO = 'TOGGLE_UPDATE_TODO';
const CHANGE_FILTER = 'CHANGE_FILTER';
const ADD_TODO_ASYNC = 'ADD_TODO_ASYNC';

export const todoActionList = {
    ADD_TODO,
    ADD_TODO_ASYNC,
    REMOVE_TODO,
    UPDATE_TODO,
    TOGGLE_TODO,
    TOGGLE_UPDATE_TODO
}

export const filterActionList = {
    CHANGE_FILTER
}

export const todoActionCreator = actionCreator(todoActionList);
export const filterActionCreator = actionCreator(filterActionList);
