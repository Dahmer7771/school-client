import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
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
        getAllUsers("all");
    };

    const handleChangeActivity = (id, active) => {
        if (currentUser._id === id) return;
        updateUser(id, { active });
        getAllUsers("all");
    };

    useEffect(() => {
        getAllUsers("all");
    }, [getAllUsers]);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Name
                        </TableCell>
                        <TableCell>
                            Email
                        </TableCell>
                        <TableCell>
                            Role
                        </TableCell>
                        <TableCell>
                            Active
                        </TableCell>
                        <TableCell align="right">
                            Ban
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <UsersListItem
                            key={user._id}
                            handleChangeRole={handleChangeRole}
                            handleChangeActivity={handleChangeActivity}
                            {...user}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
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
