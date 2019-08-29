import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_FB,
    LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER
} from './types';
export const emailChanged = (data) => {
    return {
        type: EMAIL_CHANGED,
        payload: data
    }
}

export const passwordChanged = (data) => {
    return {
        type: PASSWORD_CHANGED,
        payload: data
    }
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch))
            })

    }

}

export const loginWithFB = () => {
    return (dispatch) => {
        dispatch({ type: LOGIN_FB });
        Actions.main();
    }

}



const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
    Actions.main();

}
const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL,
    })

}