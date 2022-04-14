import store from "../store";
import types from "../types";
const {dispatch} = store
export const saveEmployeeDetails = (data) =>{
    // const nextid = 0;
    return{
        type: types.USER_DATA,
        payload: data
    }
}


export const deleteData = (id) => {
    return {
        type: types.DELETE_DATA,
        id:id
    }
}

export const editData = (data) => {
    dispatch({
        type : types.EDIT_DATA,
        payload: data,
    })
}
  