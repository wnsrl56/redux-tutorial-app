import { all } from 'redux-saga/effects';
import { watchAsync } from "../../compositions/TodoList/state/saga";

export default function* index() {
    yield all([
        watchAsync()
    ])
}
