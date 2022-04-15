import store from "../store";
import types from "../types";

const {dispatch} = store;

export const logIN = (data) => {
    dispatch({
        type: types.LOGIN,
        payload: data
    })
}
export const Logout = () => {
    dispatch({
        type: types.LOGOUT
    })
}
