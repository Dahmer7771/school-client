import React from "react";
import { Avatar, Paper, Typography } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SchoolIcon from "@material-ui/icons/School";
import MailIcon from "@material-ui/icons/Mail";
import useProfileDetailsStyles from "./styles";

const ProfileDetails = () => {
    const classes = useProfileDetailsStyles();

    return (
        <Paper className={classes.detailsContainer}>
            <Typography variant="h6">
                Profile Details
            </Typography>
            <Avatar alt="Remy Sharp" src="./images/1.jpg" className={classes.avatar} />
            <div className={classes.detailsTextContainer}>
                <div className={classes.detailsText}>
                    <AccountCircleIcon className={classes.detailsIcon} />
                    <Typography variant="body1">
                        Дяченко Денис
                    </Typography>
                </div>
                <div className={classes.detailsText}>
                    <SchoolIcon className={classes.detailsIcon} />
                    <Typography variant="body1">
                        Ученик(ца) 7 класса
                    </Typography>
                </div>
                <div className={classes.detailsText}>
                    <MailIcon className={classes.detailsIcon} />
                    <Typography variant="body1">
                        Grichenko122@gmail.com
                    </Typography>
                </div>
            </div>
        </Paper>
    );
};

export default ProfileDetails;
