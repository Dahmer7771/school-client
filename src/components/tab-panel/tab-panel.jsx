import React from "react";
import { Box, Typography } from "@material-ui/core";

const TabPanel = (props) => {
    const {
        children, value, index, ...other
    } = props;

    return (
        <Typography
            style={{ flexGrow: 1 }}
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
};

export default TabPanel;
