import { Routes, Route } from "react-router-dom";
const Routes = () => {
    return (
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
    );
};
export default Routes;
