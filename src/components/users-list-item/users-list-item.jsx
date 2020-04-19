import React from "react";
import {
    Select, Paper, Typography, IconButton, Grid,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";

const UsersListItem = ({
    _id,
    email,
    role,
    isStudent,
    name,
    active,
    handleChangeRole,
    handleChangeActivity,
    handleChangeStatus,
}) => (
    <Grid item xs={12} sm={12} md={6}>
        <Paper style={{ padding: "8px" }}>
            <div style={{ margin: 0 }}>
                <Typography variant="body1" component="span">Имя: </Typography>
                <Typography variant="body2" component="span">{name}</Typography>
            </div>
            <div style={{ margin: 0 }}>
                <Typography variant="body1" component="span">Email: </Typography>
                <Typography variant="body2" component="span">{email}</Typography>
            </div>
            <div style={{ margin: 0 }}>
                <Typography variant="body1" component="span">Роль: </Typography>
                <Select
                    native
                    value={role}
                    onChange={(e) => handleChangeRole(e, _id)}
                >
                    <option value="ADMIN">ADMIN</option>
                    <option value="MODERATOR">MODERATOR</option>
                    <option value="USER">USER</option>
                </Select>
            </div>
            <div style={{ margin: 0 }}>
                <Typography variant="body1" component="span">Статус: </Typography>
                <Select
                    native
                    value={isStudent}
                    onChange={(e) => handleChangeStatus(e, _id)}
                >
                    <option value="true">Ученик</option>
                    <option value="false">Учитель</option>
                </Select>
            </div>
            <div style={{ margin: 0 }}>
                <Typography variant="body1" component="span">Активность записи: </Typography>
                <Typography variant="body2" component="span">{active ? "Активна" : "Неактивна"}</Typography>
                <IconButton size="small" color="primary" onClick={() => handleChangeActivity(_id, !active)} component="span">
                    <CreateIcon />
                </IconButton>
            </div>
        </Paper>
    </Grid>
);

export default UsersListItem;
