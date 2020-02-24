import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
    BrowserRouter,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { SchoolServiceProvider } from "./components/school-service-context";
import App from "./components/app";
import store from "./store";
import theme from "./theme";
import SchoolService from "./services/school-service";

const schoolService = new SchoolService();

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <SchoolServiceProvider value={schoolService}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </SchoolServiceProvider>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root"),
);
