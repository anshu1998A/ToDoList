import userStatus from "./userStatus";
import { combineReducers } from "redux";
import dataDetails from './detailsReducer'

const rootReducer = combineReducers(
    {
        userStatus,
        dataDetails,
    }
)

export default rootReducer;