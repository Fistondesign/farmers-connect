import { signOut } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { HandleHtttpError } from "../../../utils/handleHttpError";
import { clearOnSignout,setSignedUserData } from "../../../utils/helper.methods";
import {
    signinWithEmailAndPasswordService,
    signupWithEmailAndPasswordService,
} from "../../../utils/services/auth.services";
import {
    setSignupError,
    setSignupLoading,
    setSigninError,
    setSigninLoading,
    clearUserStateOnLogout,
} from "../index";

export function CoreApi_SignupWithEmailAndPassword(dispatch, payload) {
    dispatch(setSignupLoading(true));
    signupWithEmailAndPasswordService(payload)
        .then((response) => {
            setSignedUserData(response);
            window.location.href = "/homepage";
        })
        .catch((error) => {
            const customMessage = HandleHtttpError(error);
            dispatch(setSignupError(customMessage));
        })
        .finally(() => {
            dispatch(setSignupLoading(false));
        });
}
export function CoreApi_SigninWithEmailAndPassword(dispatch, payload) {
    dispatch(setSigninLoading(true));
    signinWithEmailAndPasswordService(payload)
        .then((response) => {
              setSignedUserData(response);
            window.location.href = "/homepage";
        })
        .catch((error) => {
            const customMessage = HandleHtttpError(error);
            dispatch(setSigninError(customMessage));
        })
        .finally(() => {
            dispatch(setSigninLoading(false));
        });
}
export const CoreApi_SignuserOut = (dispatch) => {
    signOut(auth)
        .then((response) => {
        })
        .catch((error) => {
            
        })
        .finally(() => {
            dispatch(clearUserStateOnLogout());
            clearOnSignout();
            window.location.href = "/";
        });
};
