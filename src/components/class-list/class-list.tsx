import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    Container,
    Paper,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    TextField,
    Button,
    Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { bindActionCreators, Dispatch } from "redux";
import withSchoolService from "../hoc/with-school-service";
import useStyles from "./styles";
import classActions from "../../actions/class.actions";
import Spinner from "../spinner/spinner";

const ClassList = ({
    getAllClasses,
    classList,
    classError,
    classErrorMessage,
    loading,
    openClassEditor,
    setEditing,
    getClassById,
}: any) => {
    const classes = useStyles();
    useEffect(() => {
        getAllClasses();
    }, [getAllClasses]);

    if (classError) {
        return (
            <Typography variant="h5">
                {classErrorMessage}
            </Typography>
        );
    }

    return (
        <Container>
            <form className={classes.form}>
                <TextField
                    size="small"
                    label="Назва класу"
                    variant="outlined"
                    className={classes.input}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.searchButton}
                >
                    Пошук
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={openClassEditor}
                >
                    Створити
                </Button>
            </form>
            {loading
                ? <Spinner />
                : (
                    <Paper>
                        <List classes={{ padding: classes.list }}>
                            {classList && classList.map((item: any) => (
                                <ListItem key={item._id}>
                                    <ListItemText
                                        primary={item.name}
                                        secondary={item.classroomTeacher.name}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton
                                            onClick={() => {
                                                getClassById(item._id);
                                                setEditing(true);
                                                openClassEditor();
                                            }}
                                            aria-label="edit"
                                        >
                                            <CreateIcon />
                                        </IconButton>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                )}
        </Container>
    );
};

const mapStateToProps = ({
    classReducer: {
        classList, classError, classErrorMessage, loading,
    },
}: any) => ({
    classList,
    classError,
    classErrorMessage,
    loading,
});

const mapDispatchToProps = (dispatch: Dispatch, { schoolService }: any) => bindActionCreators({
    getAllClasses: () => classActions.getAllClasses(schoolService)(),
    getClassById: (classId: string) => classActions.getClassById(schoolService, classId)(),
    // createClass: (data: {}) => createClass(schoolService, data),
    // updateClass: (classId: string, data: {}) => updateClass(schoolService, classId, data),
    // deleteClass: (classId: string) => deleteClass(schoolService, classId),
    openClassEditor: () => classActions.openClassEditor(),
    setEditing: (editing: boolean) => classActions.setEditing(editing),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(ClassList));
