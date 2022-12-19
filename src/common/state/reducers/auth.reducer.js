import { SET_SIGNIN_ERROR, SET_SIGNIN_LOADING, SET_SIGNIN_SUCCESSED, SET_SIGNOUT, SET_SIGNUP_ERROR, SET_SIGNUP_LOADING } from "../actions/actionTypes";

const initializeSignup = { loading: false, error: {} };
export function SignupReducer(state = initializeSignup, actions) {
    switch (actions.type) {
        case SET_SIGNUP_LOADING:
            return { ...state, loading: actions.payload };
        case SET_SIGNUP_ERROR:
            return { ...state, error: actions.payload };
        default:
            return state;
    }
}

const initializeSignin = { loading: false, error: {},user:{},authenticated:false};
export function SigninReducer(state = initializeSignin, actions) {
    switch (actions.type) {
        case SET_SIGNIN_LOADING:
            return { ...state, loading: actions.payload };
        case SET_SIGNIN_ERROR:
            return { ...state, error: actions.payload };
        case SET_SIGNIN_SUCCESSED:
            return {...state,error:{},authenticated:true,user:actions.payload}
        case SET_SIGNOUT:
            return state;
        default:
            return state;
    }
}
