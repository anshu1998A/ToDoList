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
                        rollno: data.rollno,
                        address: data.address,
                        phone: data.phone,
                    },
                ],
            }

        case type.DELETE_DATA: {
            const newList = state.detailsList.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                detailsList: newList
            }
        }

        case type.EDIT_DATA: {
            console.log("update data", action.payload)
            let data = action.payload
            
            console.log("id on reducer", data?.id)
            let updateArry = state.detailsList.map((val, i) => {
                if (val?.id == data?.id?.id) {
                    return data
                }
                return val
            })

            console.log("update array",updateArry)

            return {
                ...state,
                detailsList:updateArry
            }
        }

        default: return state;
    }
}
export default dataDetails;