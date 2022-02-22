import { GET_DJANGOREACT, DELETE_DJANGOREACT, ADD_DJANGOREACT } from '../actions/types.js';

const initialState = {
    djangoreact: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_DJANGOREACT:
            return {
                ...state,
                djangoreact: action.payload
            };
        case DELETE_DJANGOREACT:
            return {
                ...state,
                djangoreact: state.djangoreact.filter(dr => dr.id !== action.payload)
            };
        case ADD_DJANGOREACT:
            return {
                ...state,
                djangoreact: [...state.djangoreact, action.payload]
            }
        default:
            return state;
    }
}