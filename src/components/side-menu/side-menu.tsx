import React from "react";
import { connect } from "react-redux";
import { Drawer, IconButton, Divider } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { SideMenuProps } from "../../types";
import useSideMenuStyles from "./styles";
import { menuActions } from "../../actions";
import MenuList from "../menu-list";

const SideMenu = ({ isMenuOpen, hideMenu }: SideMenuProps) => {
    const classes = useSideMenuStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={isMenuOpen}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={() => hideMenu()}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <MenuList />
        </Drawer>
    );
};

const mapStateToProps = ({ menuReducer: { isMenuOpen } }: any) => ({
    isMenuOpen,
});

const mapDispatchToProps = {
    hideMenu: menuActions.hideMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
