import React from "react";
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Button,
} from "@material-ui/core";
import { UsersListItem } from "../../types";

const UsersList = ({ users }: any) => (
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
                    <TableCell align="right">
                        Ban
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map(({ email, name, role }: UsersListItem) => (
                    <TableRow>
                        <TableCell>
                            {name}
                        </TableCell>
                        <TableCell>
                            {email}
                        </TableCell>
                        <TableCell>
                            {role}
                        </TableCell>
                        <TableCell align="right">
                            <Button variant="contained">
                                BAN
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default UsersList;
