
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { getData, saveState } from "../../utils/utils";
import type from "../types";



const initialState = {
    detailsList: []
};
const dataDetails = (state = initialState, action) => {

    switch (action.type) {

        case type.USER_DATA: {
            const data = action.payload
            console.log("fuyk", action.payload)
            let newList = [...state.detailsList, ...data]
            return {
                ...state,
                detailsList: newList
            }
        }

        case type.DELETE_DATA: {
            const delList = [...state.detailsList]
            const index = state.detailsList.findIndex((elem) => elem.dataId === action.id)
            
            if (index >= -1) {
                delList.splice(index, 1)
               
            }
            console.log("index",index)
            console.log('ghvdbfc',delList)
            return {
                ...state,
                detailsList: delList
            }
        }

        case type.EDIT_DATA: {
            console.log("update data", action.payload)
            let data = action.payload
            console.log("id on reducer", data?.id)
            let updateArry = state.detailsList.map((val, i) => {
                if (val?.id == data?.USerID?.id) {
                    return data
                }
                return val
            })

            console.log("update array", updateArry)
            saveState(updateArry)
            return {
                ...state,
                detailsList: updateArry
            }
        }

        default: return state;
    }
}
export default dataDetails;