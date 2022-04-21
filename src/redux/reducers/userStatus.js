import { getLogin, removeLogin, saveLogin } from "../../utils/utils";
import types from "../types";

const inititalState = {
    userData:{}
}
const userStatus = (state = inititalState, action) => {
    switch (action.type) {
        case types.LOGIN: 
        data=action.payload
        console.log("ghihghr",data)
        saveLogin(data)
        return {
            userData:data
        };


        case types.LOGOUT: 
        removeLogin();
        getLogin().then((res) => {
            console.log("swedftgyhj", res)
            return {userData:res}
        })
        return {
            ...state.userData,
            userData:undefined};

        default : return state;
    }
}
export default userStatus;