import types from "../types";
export const saveEmployeeDetails = (data) =>{
    // const nextid = 0;
    return{
        type: types.USER_DATA,
        payload: {
            id:Math.floor(Math.random()*1000), 
            data: data,
        }
    }
}


export const deleteData = (id) => {
    return {
        type: types.DELETE_DATA,
        id:id
    }
}

export const editData = (index) => {
    return {
        type : types.EDIT_DATA,
        index: index
    }
}
  