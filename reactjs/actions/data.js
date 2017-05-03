// import createAction from './utils/createAction';
// import createTypes from './utils/createTypes';

// export const DATA = createTypes('DATA', [
//     'FETCH_SUCCESS',
//     'FETCH_ERROR',
// ]);

// const receiveData = (json) => createAction(DATA.FETCH_SUCCESS,json)

// export function requestData() {
//     const json = ['hello world!'];
//     return dispatch => {
//         dispatch(receiveData(json));
//     }
// }

import createAction from './utils/createAction';
import createTypes from './utils/createTypes';

import 'whatwg-fetch';

export const DATA = createTypes('TABLE_DATA', [
    'FETCH_BEGIN',
    'FETCH_SUCCESS',
    'FETCH_ERROR',
]);

const loadData = () => createAction(DATA.FETCH_BEGIN);

const receiveData = (json) => createAction(DATA.FETCH_SUCCESS,json)

export function requestData() {
    return dispatch => {
        dispatch(loadData())
        return fetch('/ajax/data')
            .then(response => response.json())
            .then(json => dispatch(receiveData(json)))
    }
}