import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./app/store";
import "antd/dist/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            {/* Entire app is inside the Provider, for that every single component inside App is going to have access to the store variable */}
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById("root"));
