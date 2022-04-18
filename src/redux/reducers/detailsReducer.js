
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveState } from "../../utils/utils";
import type from "../types";



const initialState = {
    detailsList: []
};
const dataDetails = (state = initialState, action) => {

    switch (action.type) {

        case type.USER_DATA: {

            const data = action.payload;
            let storedArr = state.detailsList.concat(data)
            // console.log("fuyk", data)
            saveState(storedArr)
            // let newList = [...state.detailsList, ...data]
            return {
                ...state,
                detailsList: storedArr
            }
        }

        case type.DELETE_DATA: {


            const delList = [...state.detailsList]
            const index = state.detailsList.findIndex((elem) => elem.dataId === action.dataId)
            console.log("rstxdfgcc", action.dataId)
            console.log("asdfghjkl;", index)
            if (index >= 0) {
                delList.splice(index, 1)
            }
            saveState(delList).then((val) => {
                console.log("delete store data", val)
            })
            // console.log("index", index)
            // console.log('ghvdbfc', delList)
            return {
                ...state,
                detailsList: delList
            }
        }

        case type.EDIT_DATA: {

            let data = action.payload;
            let newArray = [...state.detailsList]
            console.log("id on reducer", data)

            let updateArry = state.detailsList.findIndex((elem) => 
            elem.dataId === data.updateId
            )

            // console.log("update array in the store is", updateArry)

            newArray[updateArry] = data
            saveState(newArray).then((val) => {
                console.log("my store data", val)
            })
            return {
                ...state,
                detailsList: newArray
            }
        }

        default: return state;
    }
}
export default dataDetails;