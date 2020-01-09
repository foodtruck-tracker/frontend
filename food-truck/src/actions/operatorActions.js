import axiosWithAuth from "../utils/axiosWithAuth";





export const FETCH_TRUCKS_START = "FETCH_TRUCKS_START";
export const FETCH_TRUCKS_SUCCESS = "FETCH_TRUCKS_SUCCESS";
export const FETCH_TRUCKS_FAILURE = "FETCH_TRUCKS_FAILURE ";

//Get Operator Trucks
export const getMyTrucks = () => dispatch => {
    dispatch({ type: FETCH_TRUCKS_START});
    axiosWithAuth()
    .get('/endpoint')
    .then(response => {
        console.log(response);
        dispatch({ type: FETCH_TRUCKS_SUCCESS, payload: response.data});
    })
    .catch(err => {
        dispatch({type: FETCH_TRUCKS_FAILURE, payload: err.response});
    });
};

