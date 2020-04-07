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
import EditProfile from "../edit-profile";
import editProfileActions from "../../actions/edit-profile.actions";

const ProfileDetails = ({
    currentUser,
    openEditor,
}) => {
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
                            {currentUser.name}
                        </Typography>
                    </div>
                    <div className={classes.detailsText}>
                        <SchoolIcon className={classes.detailsIcon} />
                        <Typography variant="body1">
                            {
                                currentUser.grade
                                    ? `Учень ${currentUser.grade.name} класу`
                                    : (
                                        <span className={classes.warningText}>
                                            Вкажіть свій клас
                                        </span>
                                    )
                            }
                        </Typography>
                    </div>
                    <div className={classes.detailsText}>
                        <SchoolIcon className={classes.detailsIcon} />
                        <Typography variant="body1">
                            {
                                currentUser.grade
                                    ? `Класний керівник: ${currentUser.grade.classroomTeacher.name}`
                                    : (
                                        <span className={classes.warningText}>
                                            Вкажіть свій клас
                                        </span>
                                    )
                            }
                        </Typography>
                    </div>
                    <div className={classes.detailsText}>
                        <SchoolIcon className={classes.detailsIcon} />
                        <Typography variant="body1">
                            {
                                currentUser.grade
                                    ? `Email класного керівника: ${currentUser.grade.classroomTeacher.email}`
                                    : (
                                        <span className={classes.warningText}>
                                            Вкажіть свій клас
                                        </span>
                                    )
                            }
                        </Typography>
                    </div>
                    <div className={classes.detailsText}>
                        <MailIcon className={classes.detailsIcon} />
                        <Typography variant="body1">
                            {currentUser.email}
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
        currentUser,
    },
}) => ({
    currentUser,
});

const mapDispatchToProps = {
    openEditor: () => editProfileActions.openProfileEditor(),
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
