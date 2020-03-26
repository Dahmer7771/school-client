import React from "react";
import {
    Container, Grid,
} from "@material-ui/core";
import Timetable from "../../components/timetable";
import useStyles from "./styles";
import ProfileDetails from "../../components/profile-details";

const Profile = ({ currentUser }: any) => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container spacing={2}>
                <Grid item lg={3} md={4} xs={12}>
                    <ProfileDetails userDetails={currentUser} />
                </Grid>
                <Grid item lg={9} md={8} xs={12}>
                    <Timetable />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;
