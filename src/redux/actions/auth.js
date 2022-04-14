import store from "../store";
import types from "../types";

const {dispatch} = store
export const logIN = () => {
    dispatch({
        type: types.LOGIN
    })
}
export const Logout = () => {
    return {
        type: types.LOGOUT
    }
}
