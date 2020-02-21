import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#64d8cb",
            main: "#26a69a",
            dark: "#00766c",
            contrastText: "#fff",
        },
        secondary: {
            light: "#8bf5ff",
            main: "#4fc2f7",
            dark: "#0092c4",
            contrastText: "#000",
        },
    },
});

export default theme;
