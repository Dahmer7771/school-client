import React from "react";
import { connect } from "react-redux";
import { Drawer, IconButton, Divider } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import useSideMenuStyles from "./styles";
import { toggleMenu as toggleMenuAction } from "../../actions";
import MenuList from "../menu-list";

const SideMenu = ({ isMenuOpen, toggleMenu }: any) => {
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
                <IconButton onClick={toggleMenu}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <MenuList />
        </Drawer>
    );
};

const mapStateToProps = ({ isMenuOpen }: any) => ({
    isMenuOpen,
});

const mapDispatchToProps = {
    toggleMenu: toggleMenuAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
