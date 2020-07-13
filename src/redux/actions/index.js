export const actionCreator = (actionList) => (actionKey, payload = {}, middleware) => {
    const action = actionList[actionKey];
    return {
        type: action,
        payload
    }
};
