import { DATA } from '../actions/data';

const initialState = {
    isFetching : true,
    data       : null,
}

function data(state = initialState, action = {}) {
    switch (action.type) {
        case DATA.FETCH_SUCCESS:            
            return {
                ...state,
                isFetching : false,
                data       : action.payload,
            }
        case DATA.FETCH_ERROR:
            return {
                ...state,
                isFetching : false,
            }
        default:
            return state;
    }
}

export default data;