import store from "../store";
import types from "../types";
const {dispatch} = store



export const saveEmployeeDetails = (data) =>{
    // const nextid = 0;
    dispatch({
        type: types.USER_DATA,
        payload: data
    })
}


export const deleteData = (dataId) => {
    dispatch({
        type: types.DELETE_DATA,
        dataId
    })
}

export const editData = (data) => {
    dispatch({
        type : types.EDIT_DATA,
        payload: data,
    })
}
  