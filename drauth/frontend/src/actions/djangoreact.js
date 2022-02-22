import axios from 'axios';
import { GET_DJANGOREACT, DELETE_DJANGOREACT, ADD_DJANGOREACT, GET_ERRORS } from './types';
import { createMessage } from './messages';

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
        .catch(err => console.log(err));
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
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
};