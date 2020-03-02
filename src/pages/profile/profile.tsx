import React from "react";
import {
    Container, Grid,
} from "@material-ui/core";
import Timetable from "../../components/timetable/index";
import useProfileStyles from "./styles";
import ProfileDetails from "../../components/profile-details/index";

const Profile = () => {
    const classes = useProfileStyles();

    return (
        <Container className={classes.container}>
            <Grid container spacing={2}>
                <Grid item lg={3} md={4} xs={12}>
                    <ProfileDetails />
                </Grid>
                <Grid item lg={9} md={8} xs={12}>
                    <Timetable />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;
