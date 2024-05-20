
import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";


export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_SMURFS_START })
        axios
            .get(`http://localhost:3333/smurfs`)
            .then((res) => {
                console.log(FETCH_SMURFS_SUCCESS)
                dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
            })
            .catch((err) => console.log(err))
    }

}

export const addSmurf = (newSmurf) => {
    return (dispatch) => {
        dispatch({ type: ADD_SMURF })
        axios
            .post(`http://localhost:3333/smurfs`, newSmurf)
            .then((res) => {
                console.log(ADD_SMURF_SUCCESS)
                dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
            })
            .catch((err) => console.log(err))
    }
}



