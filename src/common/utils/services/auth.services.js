import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
export const signupWithEmailAndPasswordService = (data) => {
    return createUserWithEmailAndPassword(auth, data.email, data.password);
};
export const signinWithEmailAndPasswordService = (data) => {
    return signInWithEmailAndPassword(auth, data.email, data.password);
};

