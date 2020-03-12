import React from "react";
import {
    Button, Select, TableCell, TableRow,
} from "@material-ui/core";

const UsersListItem = ({
    _id, email, role, name, active, handleChangeRole, handleChangeActivity,
}: any) => (
    <TableRow>
        <TableCell>
            {name}
        </TableCell>
        <TableCell>
            {email}
        </TableCell>
        <TableCell>
            <Select
                native
                value={role}
                onChange={(e) => handleChangeRole(e, _id)}
            >
                <option value="ADMIN">ADMIN</option>
                <option value="MODERATOR">MODERATOR</option>
                <option value="USER">USER</option>
            </Select>
        </TableCell>
        <TableCell>
            {active ? "Активна" : "Неактивна"}
        </TableCell>
        <TableCell align="right">
            <Button
                variant="contained"
                onClick={() => handleChangeActivity(_id, !active)}
            >
                BAN
            </Button>
        </TableCell>
    </TableRow>
);

export default UsersListItem;
