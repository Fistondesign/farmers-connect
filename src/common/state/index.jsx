import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import combinedReducers from "./combineReducers";
import { composeWithDevTools } from "@redux-devtools/extension";
const Store = createStore(
    combinedReducers,
    composeWithDevTools(applyMiddleware(thunk))
);
export default Store;
