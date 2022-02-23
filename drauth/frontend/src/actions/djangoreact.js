import axios from 'axios';
import { GET_DJANGOREACT, DELETE_DJANGOREACT, ADD_DJANGOREACT } from './types';
import { createMessage, returnErrors } from './messages';

// GET DJANGOREACT
export const getDjangoreact = () => dispatch => {
    axios
        .get("/api/employees/")
        .then(res => {
            dispatch({
                type: GET_DJANGOREACT,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE DJANGOREACT
export const deleteDjangoreact = id => dispatch => {
    axios
        .delete(`/api/employees/${id}/`)
        .then(res => {
            dispatch(createMessage({ deleteDjangoReact: "DjangoReact Deleted"}));
            dispatch({
                type: DELETE_DJANGOREACT,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

// ADD DJANGOREACT
export const addDjangoreact = djangoreact => dispatch => {
    axios
        .post("/api/employees/", djangoreact)
        .then(res => {
            dispatch(createMessage({ addDjangoReact: "DjangoReact Added"}));
            dispatch({
                type: ADD_DJANGOREACT,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};