const indexObj = {
    index: 0
};

const initialTodos = {
    todos: [],
    filterType: 'ALL'
}

const todoReducers = {
    ADD_TODO: (state, payload) => {
        const {todos} = state;
        const {text} = payload;

        if(text === '') {
            return {
                ...state
            }
        }

        return {
            ...state,
            todos: [
                ...todos,
                {
                    text: text,
                    completed: false,
                    update: false,
                    id: indexObj.index++,
                }
            ]
        }
    },
    REMOVE_TODO: (state, payload) => {
        const {todos} = state;
        const {id} = payload;
        return {
            ...state,
            todos: [
                ...todos.filter(v => v.id !== id)
            ]
        }
    },
    UPDATE_TODO: (state, payload) => {
        const {todos} = state;
        const {text, id} = payload;
        return {
            ...state,
            todos: [
                ...todos.map(v => {
                    if(v.id === id) v.text = text;
                    return v;
                })
            ]
        }
    },
    TOGGLE_TODO: (state, payload) => {
        const {todos} = state;
        const {completed, id} = payload;
        return {
            ...state,
            todos: [
                ...todos.map(v => {
                    if(v.id === id) v.completed = completed;
                    return v;
                })
            ]
        }
    },
    TOGGLE_UPDATE_TODO:  (state, payload) => {
        const {todos} = state;
        const {update, id} = payload;
        return  {
            ...state,
            todos:[
                ...todos.map(v => {
                    if(v.id === id) v.update = update;
                    return v;
                })
            ]
        }
    },
    CHANGE_FILTER: (state, payload) => {
        const {type} = payload;
        return {
            ...state,
            filterType: type,
        }
    }
}

export const todoState = (state = initialTodos, action) => {
    const {type, payload} = action;
    const reducer = todoReducers[type];
    return reducer ? reducer(state, payload) : state;
};
