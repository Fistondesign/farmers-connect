import { combineReducers } from "redux";
import {
    changeLanguageReducer,
    changeModeReducer,
    SignupReducer,
} from "../reducers";
import { SigninReducer } from "../reducers/auth.reducer";
const combinedReducers = combineReducers({
    mode: changeModeReducer,
    language: changeLanguageReducer,
    signup: SignupReducer,
    signin: SigninReducer,
});
export default combinedReducers;
