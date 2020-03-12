import React from "react";
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from "@material-ui/core";
import { UsersListItemProps } from "../../types";
import UsersListItem from "../users-list-item";

const UsersList = ({ users, handleChangeRole, handleChangeActivity }: any) => (
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

export default UsersList;
