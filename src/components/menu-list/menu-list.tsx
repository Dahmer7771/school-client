import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    List, ListItem, ListItemIcon, ListItemText,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";

const authorizedUserMenuList = [
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
        title: "Выход",
        route: "/exit",
    },
];

const unauthorizedUserMenuList = [
    {
        id: 1,
        title: "Посты",
        route: "/posts",
    },
];


const MenuList = ({ isAuth }: any) => {
    const history = useHistory();
    const listItems = isAuth
        ? authorizedUserMenuList
        : unauthorizedUserMenuList;

    return (
        <List>
            {listItems.map(({ id, title, route }) => (
                <ListItem button key={id}>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText onClick={() => history.push(route)} primary={title} />
                </ListItem>
            ))}
        </List>
    );
};

const mapStateToProps = ({ authReducer: { isAuth } }: any) => ({
    isAuth,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
