import { IntlProvider } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import NotFound from "./common/components/notFound";
import PrivateRoute from "./common/components/privaterRoutes/privateRoute";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import HomePage from "./components/homepage";
import AccountPreference from "./components/profile/subComponent/preferences/";
import Profile from "./components/profile/user";
import Messages from "./common/utils/lang";
import { useEffect } from "react";
import { changeMode, signinSuccessFull } from "./common/state/actions";
import { getSignedUserData, getTheme } from "./common/utils/helper.methods";
function App() {
    const selector = useSelector((state) => state.language);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        let userData = getSignedUserData();
        if (userData["email"] !== undefined) {
            dispatch(signinSuccessFull(userData));
            let path =
                location.pathname !== "/" ? location.pathname : "/homepage";
            navigate(path);
        }
    }, []);
    useEffect(() => {
        const theme = getTheme();
        if (theme!==undefined) {
            dispatch(changeMode({'mode':theme}));
        }
    }, []);
    return (
        <IntlProvider
            messages={Messages[selector.language]}
            locale={selector.language}
        >
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/homepage"
                    element={
                        <PrivateRoute>
                            <HomePage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/preferences"
                    element={
                        <PrivateRoute>
                            <AccountPreference />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </IntlProvider>
    );
}
export default App;
