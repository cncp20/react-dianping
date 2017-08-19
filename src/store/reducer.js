const reducer = function (state, action) {
    switch (action.type) {
        case "CHANGE_CITY":
            return Object.assign({}, state, {
                city: action.payload
            });
            break;
        case "LOGIN":
            return Object.assign({}, state, {
                username: action.payload
            });
            break;
        default:
            return state;
            break;
    }
}

export default reducer;