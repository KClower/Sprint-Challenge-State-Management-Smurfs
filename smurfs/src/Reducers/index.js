
import { FETCH_SMURFS_START } from "../Actions";
import { FETCH_SMURFS_SUCCESS } from "../Actions";

const initialState = {
    smurfs: [
        {
            name: "",
            age: "",
            height: ""
        }
    ],
    isLoading: false,
    error: "",
}



export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }

        default:
            return state;
    }
}

