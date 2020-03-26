import React from "react";
import { connect } from "react-redux";
import {
    Avatar, Paper, Typography, Button,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SchoolIcon from "@material-ui/icons/School";
import MailIcon from "@material-ui/icons/Mail";
import CreateIcon from "@material-ui/icons/Create";
import useStyles from "./styles";
import profileEditorActions from "../../actions/profile-editor.actions";
import EditProfile from "../edit-profile";

const ProfileDetails = ({
    name, email, grade, openEditor,
}: any) => {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.detailsContainer}>
                <div className={classes.profileHeader}>
                    <Typography variant="h6">
                        Profile Details
                    </Typography>
                    <Button onClick={openEditor}>
                        <CreateIcon />
                    </Button>
                </div>
                <Avatar alt="Remy Sharp" src="./images/1.jpg" className={classes.avatar} />
                <div className={classes.detailsTextContainer}>
                    <div className={classes.detailsText}>
                        <AccountCircleIcon className={classes.detailsIcon} />
                        <Typography variant="body1">
                            {name}
                        </Typography>
                    </div>
                    <div className={classes.detailsText}>
                        <SchoolIcon className={classes.detailsIcon} />
                        <Typography variant="body1">
                            {
                                grade
                                    ? `Ученик(ца) ${grade} класса`
                                    : (
                                        <span className={classes.warningText}>
                                            Укажите свой класс
                                        </span>
                                    )
                            }
                        </Typography>
                    </div>
                    <div className={classes.detailsText}>
                        <MailIcon className={classes.detailsIcon} />
                        <Typography variant="body1">
                            {email}
                        </Typography>
                    </div>
                </div>
            </Paper>
            <EditProfile />
        </>
    );
};

const mapStateToProps = ({
    authReducer: {
        currentUser: { name, email, grade },
    },
}: any) => ({
    name,
    email,
    grade,
});

const mapDispatchToProps = {
    openEditor: () => profileEditorActions.openProfileEditor(),
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
