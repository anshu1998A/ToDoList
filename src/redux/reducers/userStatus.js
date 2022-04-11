import types from "../types";
const inititalState = false;
const userStatus = (state = inititalState, action) => {
    switch (action.type) {
        case types.LOGIN: return state = true;
        case types.LOGOUT: return state = false;
        default : return state;
    }
}
export default userStatus;