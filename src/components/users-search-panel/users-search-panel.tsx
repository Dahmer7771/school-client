import React from "react";
import { connect } from "react-redux";
import {
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from "@material-ui/core";
import {
    ToggleButton,
    ToggleButtonGroup,
} from "@material-ui/lab";
import { bindActionCreators, Dispatch } from "redux";
import useStyles from "./styles";
import { usersActions } from "../../actions";
import withSchoolService from "../hoc/with-school-service";

const UsersSearchPanel = ({
    findUsers, showMode, filterField, setShowMode, term, setTerm, loading, setFilterField,
}: any) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.flexContainer}>
                <TextField onChange={(e) => setTerm(e.target.value)} className={classes.input} label="Поиск" variant="outlined" size="small" />
                <Button
                    disabled={loading}
                    variant="contained"
                    color="primary"
                    className={classes.searchButton}
                    onClick={() => findUsers(showMode, filterField, term)}
                >
                    Поиск
                </Button>
            </div>
            <div className={classes.flexContainer}>
                <ToggleButtonGroup
                    className={classes.buttonsGroup}
                    color="primary"
                    size="small"
                    value={showMode}
                    exclusive
                    onChange={(e, mode) => findUsers(mode, filterField, term)}
                >
                    <ToggleButton
                        key={1}
                        value="all"
                        disabled={showMode === "all"}
                        onClick={() => setShowMode("all")}
                    >
                        Все
                    </ToggleButton>
                    <ToggleButton
                        key={2}
                        value="active"
                        disabled={showMode === "active"}
                        onClick={() => setShowMode("active")}
                    >
                        Активные
                    </ToggleButton>
                    <ToggleButton
                        key={3}
                        value="inactive"
                        disabled={showMode === "inactive"}
                        onClick={() => setShowMode("inactive")}
                    >
                        Неактивные
                    </ToggleButton>
                </ToggleButtonGroup>
                <FormControl className={classes.select} size="small" variant="outlined">
                    <InputLabel id="filter-field">Filter field</InputLabel>
                    <Select
                        label="filter field"
                        labelId="filter-field"
                        value={filterField}
                        onChange={(e) => setFilterField(e.target.value)}
                    >
                        <MenuItem value="name">Name</MenuItem>
                        <MenuItem value="email">Email</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </>
    );
};

const mapStateToProps = ({
    usersReducer: {
        showMode, filterField, term, loading,
    },
}: any) => ({
    showMode,
    filterField,
    term,
    loading,
});

const mapDispatchToProps = (dispatch: Dispatch, { schoolService }: any) => bindActionCreators({
    findUsers: (
        active: string, filter: string, term: string,
    ) => usersActions.findUsers(schoolService, active, filter, term)(),
    setShowMode: (showMode: string) => usersActions.setShowMode(showMode),
    setTerm: (term: string) => usersActions.setTerm(term),
    setFilterField: (filterField: string) => usersActions.setFilterField(filterField),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(UsersSearchPanel));
