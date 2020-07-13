import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {todoActionCreator, todoActionList} from "./state/action";

const {ADD_TODO, ADD_TODO_ASYNC} = todoActionList;

const AddTodo = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    return (
        <div>
            <input onChange={(e) => {
                setValue(e.target.value);
            }}/>
            <button onClick={() => {
                dispatch(todoActionCreator(ADD_TODO, {
                    text: value,
                    completed: false,
                    update: false
                }))
            }}>ADD</button>
            <button onClick={() => dispatch(todoActionCreator(ADD_TODO_ASYNC, {
                    text: value,
                    completed: false,
                    update: false
                }))}>ASYNC ADD</button>
        </div>
    )
};

export default AddTodo;
