import type from "../types";
const initialState = {
    detailsList: []
};
const dataDetails = (state = initialState, action) => {
    // console.log(action.type)
    // console.log({...state})

    switch (action.type) {
        case type.USER_DATA: const { id, data } = action.payload;
            return {
                ...state,
                detailsList: [
                    
                    ...state.detailsList,
                    {
                        id: id,
                        name: data.name,
                        age: data.age,
                        rollNo: data.rollno,
                        address: data.address,
                        mobileNum: data.phone,
                    },
                ],
            }

            case type.DELETE_DATA: 
            const newList = state.detailsList.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                detailsList:newList
            }

            
            
            default : return state;
    }
}
export default dataDetails;