
import { ADD_SMURF, ADD_SMURF_SUCCESS, FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS } from "../Actions";



const initialState = {
    smurfs: [],
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
        case ADD_SMURF:
            return {
                ...state,
                isLoading: true
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }

        default:
            return state;
    }
}

