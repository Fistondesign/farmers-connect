import { CHANGE_LANGUAGE, CHANGE_MODE } from "../actions/actionTypes";
const initialMode = {
    current_mode: "light",
};

export function changeModeReducer(state = initialMode, actions) {
    switch (actions.type) {
        case CHANGE_MODE:
            return { ...state, current_mode: actions.payload };
        default:
            return state;
    }
}
const initialLanguage = {
    language: "en-us",
};
export function changeLanguageReducer(state = initialLanguage, actions) {
    switch (actions.type) {
        case CHANGE_LANGUAGE:
            return { ...state, language: actions.payload };

        default:
            return state;
    }
}

export { SignupReducer } from "./auth.reducer";
