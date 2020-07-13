import {selectCreator} from "../../../redux/selectors";

const getTodos = (state) => state.todoState;
export const getVisibleTodos = selectCreator(
    [getTodos],
    ({todos, filterType}) => {
        switch(filterType) {
            case 'ALL' : return todos;
            case 'COMPLETED' : return todos.filter(v => v.completed);
            case 'UNCOMPLETED' : return todos.filter(v => !v.completed)
            default : return todos;
        }
    }
);
