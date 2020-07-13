import {createSelector} from "reselect";
export const selectCreator = (selector, combiner, middleware) => {
    if(middleware) middleware();
    return createSelector([...selector], combiner);
};
