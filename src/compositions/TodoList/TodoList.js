import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import TodoFilter from "./TodoFilter";
import TodoItem from "../../components/TodoItem";
import {getVisibleTodos} from "./state/selector";
import {todoActionCreator, todoActionList} from "./state/action";

const TodoList = () => {
    const {TOGGLE_TODO, REMOVE_TODO, TOGGLE_UPDATE_TODO, UPDATE_TODO} =todoActionList;
    const list = useSelector(state => getVisibleTodos(state));
    const dispatch = useDispatch();

    const todoActions = {
        toggleItem: (id, completed) => dispatch(todoActionCreator(TOGGLE_TODO, {
            id,
            completed
        })),
        deleteItem: (id) => dispatch(todoActionCreator(REMOVE_TODO, {
            id
        })),
        updateItem: (id, text) => dispatch(todoActionCreator(UPDATE_TODO, {
            id,
            text
        })),
        toggleUpdateItem: (id, update) => dispatch(todoActionCreator(TOGGLE_UPDATE_TODO, {
            id,
            update
        }))
    }

    return (
        <div>
            <ul>
                {list.map((v,i) => <TodoItem key={i} item={v} {...todoActions} />)}
            </ul>
            <TodoFilter />
        </div>
    )
};

export default TodoList;
