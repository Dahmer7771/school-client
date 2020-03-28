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
import { bindActionCreators, Dispatch } from "redux";
import { UsersListItemProps } from "../../types";
import UsersListItem from "../users-list-item";
import { usersActions } from "../../actions";
import withSchoolService from "../hoc/with-school-service";

const UsersList = ({
    users, currentUser, updateUser, getAllUsers,
}: any) => {
    const handleChangeRole = (event: any, id: string) => {
        if (currentUser._id === id) return;
        const role = event.target.value;
        updateUser(id, { role });
    };

    const handleChangeActivity = (id: string, active: boolean) => {
        if (currentUser._id === id) return;
        updateUser(id, { active });
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
                    {users.map((user: UsersListItemProps) => (
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
}: any) => ({
    users,
    currentUser,
});

const mapDispatchToProps = (dispatch: Dispatch, { schoolService }: any) => bindActionCreators({
    getAllUsers: (active) => usersActions.getAllUsers(schoolService, active)(),
    updateUser: (userId, role) => usersActions.updateUser(schoolService, userId, role)(),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(UsersList));
