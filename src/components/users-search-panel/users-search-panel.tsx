import React from "react";
import {
    TextField,
    ButtonGroup,
    Button,
} from "@material-ui/core";
import useUsersSearchPanelStyles from "./styles";

const UsersSearchPanel = ({ getAllUsers }: any) => {
    const classes = useUsersSearchPanelStyles();

    return (
        <div className={classes.panelContainer}>
            <TextField className={classes.input} label="Поиск" variant="outlined" size="small" />
            <ButtonGroup className={classes.buttonsGroup} variant="contained" color="primary">
                <Button onClick={() => getAllUsers()}>Все</Button>
                <Button onClick={() => getAllUsers("1")}>Активные</Button>
                <Button onClick={() => getAllUsers("0")}>Неактивные</Button>
            </ButtonGroup>
        </div>
    );
};

export default UsersSearchPanel;
