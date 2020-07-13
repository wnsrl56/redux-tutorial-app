import {todoActionCreator, todoActionList} from "./action";
import {put, takeEvery} from "redux-saga/effects";

const {ADD_TODO, ADD_TODO_ASYNC} = todoActionList;

export function* addTodoAsync({payload}) {
    yield put(todoActionCreator(ADD_TODO, payload))
}

export function* watchAsync() {
    yield takeEvery(ADD_TODO_ASYNC, addTodoAsync);
}
