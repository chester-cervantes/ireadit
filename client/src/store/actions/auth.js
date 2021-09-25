import * as api from '../../api';
import { AUTH } from '../actionType';

// action function creator, if use async, then use redux thunk
export const logIn = (formData, history) => {
    return async dispatch => {
        try {
            const { data } = await api.logIn(formData);

            dispatch({ type: AUTH, data });

            history.push('/');
        } catch (error) {
            console.log("error");
            console.log(error);
        }
    }
}

export const signUp = (formData, history) => {
    return async dispatch => {
        try {
            const { data } = await api.signUp(formData);

            dispatch({ type: AUTH, data });

            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }
}