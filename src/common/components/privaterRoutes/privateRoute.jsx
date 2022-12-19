import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
    const selector = useSelector((state) => state.signin);
    const auth = selector.authenticated;
    return auth ? children : <Navigate to="/" />;
};
export default PrivateRoute;
