import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Store from "./common/state";
import { Provider } from "react-redux";
import "./common/styles/app.css";
import { IntlProvider } from "react-intl";
import Messages from "./common/utils/lang";
const state=Store.getState();
ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store}>
            <IntlProvider messages={Messages[state.language.language]} locale={state.language.language}>
                <Router>
                    <App />
                </Router>
            </IntlProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
