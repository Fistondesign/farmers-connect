import { setTheme } from "../../utils/helper.methods";
import { CHANGE_LANGUAGE, CHANGE_MODE } from "./actionTypes";

export function changeMode(payload) {
    return (dispatch) => {
        setTheme(payload.mode);
        console.log(payload.mode);
        document.documentElement.setAttribute("data-theme", payload.mode);
        dispatch({type:CHANGE_MODE,payload:payload.mode});
    };
}
export function changeLanguage(payload) {
    return (dispatch) => {
        dispatch({ type: CHANGE_LANGUAGE, payload: payload });
    };
}
export {
    SignupWithEmailAndPassword,
    SigninWithEmailAndPassword,
    setSignupError,
    setSignupLoading,
    setSigninError,
    setSigninLoading,
    signinSuccessFull,
    clearUserStateOnLogout,
    signUserOut,
} from "./auth.actions";
