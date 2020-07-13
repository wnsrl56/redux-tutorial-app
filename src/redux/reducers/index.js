import { combineReducers } from "redux";
import {todoState} from "../../compositions/TodoList/state/reducer";

export default combineReducers({
  todoState,
});
