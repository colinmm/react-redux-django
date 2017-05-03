import createAction from './utils/createAction';
import createTypes from './utils/createTypes';

export const DATA = createTypes('DATA', [
    'FETCH_SUCCESS',
    'FETCH_ERROR',
]);

const receiveData = (json) => createAction(DATA.FETCH_SUCCESS,json)

export function requestData() {
    const json = ['hello world!'];
    return dispatch => {
        dispatch(receiveData(json));
    }
}