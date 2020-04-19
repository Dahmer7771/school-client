import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    List, ListItem, ListItemText,
} from "@material-ui/core";
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
            title: "Управление пользователями",
            route: "/users-editing",
        },
        {
            id: 4,
            title: "Управление классами",
            route: "/classes-editing",
        },
        {
            id: 5,
            title: "Управление статьями",
            route: "/articles-editing",
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
