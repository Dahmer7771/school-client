import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    List, ListItem, ListItemIcon, ListItemText,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import { menuActions } from "../../actions/index";

const menuItems = {
    ADMIN: [
        {
            id: 1,
            title: "Посты",
            route: "/posts",
        },
        {
            id: 2,
            title: "Личный кабинет",
            route: "/profile",
        },
        {
            id: 3,
            title: "Администрирование",
            route: "/administration",
        },
    ],
    USER: [
        {
            id: 1,
            title: "Посты",
            route: "/posts",
        },
        {
            id: 2,
            title: "Личный кабинет",
            route: "/profile",
        },
    ],
    PUBLIC: [
        {
            id: 1,
            title: "Посты",
            route: "/posts",
        },
    ],
};

const MenuList = ({ currentUser, hideMenu }) => {
    const history = useHistory();
    const listItems = menuItems[currentUser.role || "PUBLIC"];

    return (
        <List>
            {listItems.map(({ id, title, route }) => (
                <ListItem
                    button
                    key={id}
                    onClick={() => {
                        history.push(route);
                        hideMenu();
                    }}
                >
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={title}
                    />
                </ListItem>
            ))}
        </List>
    );
};

const mapStateToProps = ({ authReducer: { currentUser } }) => ({
    currentUser,
});

const mapDispatchToProps = {
    hideMenu: menuActions.hideMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
