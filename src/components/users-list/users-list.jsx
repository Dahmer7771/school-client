import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    Grid,
} from "@material-ui/core";
import { bindActionCreators } from "redux";
import UsersListItem from "../users-list-item";
import { usersActions } from "../../actions/index";
import withSchoolService from "../hoc/with-school-service";

const UsersList = ({
    users, currentUser, updateUser, getAllUsers,
}) => {
    const handleChangeRole = (event, id) => {
        if (currentUser._id === id) return;
        const role = event.target.value;
        updateUser(id, { role });
    };

    const handleChangeActivity = (id, active) => {
        if (currentUser._id === id) return;
        updateUser(id, { active });
    };

    const handleChangeStatus = (event, id) => {
        let isStudent;
        if (event.target.value === "true") isStudent = true;
        else isStudent = false;
        updateUser(id, { isStudent });
    };

    useEffect(() => {
        getAllUsers("all");
    }, [getAllUsers]);

    return (
        <Grid container spacing={2}>
            {users.map((user) => (
                <UsersListItem
                    key={user._id}
                    handleChangeRole={handleChangeRole}
                    handleChangeActivity={handleChangeActivity}
                    handleChangeStatus={handleChangeStatus}
                    {...user}
                />
            ))}
        </Grid>
    );
};

const mapStateToProps = ({
    usersReducer: { users },
    authReducer: { currentUser },
}) => ({
    users,
    currentUser,
});

const mapDispatchToProps = (dispatch, { schoolService }) => bindActionCreators({
    getAllUsers: (active) => usersActions.getAllUsers(schoolService, active)(),
    updateUser: (userId, data) => usersActions.updateUser(schoolService, userId, data)(),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(UsersList));
