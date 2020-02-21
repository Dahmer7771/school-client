import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
    BrowserRouter,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import App from "./components/app";
import store from "./store";
import theme from "./theme";

ReactDOM.render(
    <Provider store={store}>
        <ScopedCssBaseline>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </ScopedCssBaseline>
    </Provider>,
    document.getElementById("root"),
);
