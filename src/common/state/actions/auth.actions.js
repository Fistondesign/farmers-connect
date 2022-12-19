import {
    SET_SIGNIN_ERROR,
    SET_SIGNIN_LOADING,
    SET_SIGNIN_SUCCESSED,
    SET_SIGNOUT,
    SET_SIGNUP_ERROR,
    SET_SIGNUP_LOADING,
} from "./actionTypes";
import {
    CoreApi_SigninWithEmailAndPassword,
    CoreApi_SignupWithEmailAndPassword,
    CoreApi_SignuserOut,
} from "./coreApis/auth.coreApi";

export const SignupWithEmailAndPassword = (payload) => {
    return (dispatch) => {
        return CoreApi_SignupWithEmailAndPassword(dispatch, payload);
    };
};
export const setSignupLoading = (value) => {
    return {
        type: SET_SIGNUP_LOADING,
        payload: value,
    };
};
export const setSignupError = (value) => {
    return {
        type: SET_SIGNUP_ERROR,
        payload: value,
    };
};

//signin actions

export const SigninWithEmailAndPassword = (payload) => {
    return (dispatch) => {
        return CoreApi_SigninWithEmailAndPassword(dispatch, payload);
    };
};
export const setSigninLoading = (value) => {
    return {
        type: SET_SIGNIN_LOADING,
        payload: value,
    };
};
export const setSigninError = (value) => {
    return {
        type: SET_SIGNIN_ERROR,
        payload: value,
    };
};
export const signinSuccessFull = (values) => {
    return {
        type: SET_SIGNIN_SUCCESSED,
        payload: values,
    };
};
export const signUserOut=()=>{
    return(dispatch)=>{
        CoreApi_SignuserOut(dispatch);
    }
}
export const clearUserStateOnLogout=()=>{
    return{
        type:SET_SIGNOUT,
        payload:null
    }
}
