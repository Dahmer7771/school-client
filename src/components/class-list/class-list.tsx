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
import alertActions from "../../actions/alert.actions";

const ClassList = ({
    classesList,
    getAllError,
    getAllMessage,
    getAllLoading,
    getAllClasses,
    openClassEditor,
    openAlert,
    deleteClass,
    getClassById,
    setEditing,
    deleteError,
}: any) => {
    const classes = useStyles();
    useEffect(() => {
        getAllClasses();
    }, [getAllClasses]);

    if (getAllError) {
        return (
            <Typography variant="h5">
                {getAllMessage}
            </Typography>
        );
    }

    if (deleteError) console.log("delete error");

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
            {getAllLoading
                ? <Spinner />
                : (
                    <Paper>
                        <List classes={{ padding: classes.list }}>
                            {classesList && classesList.map((item: any) => (
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
                                        <IconButton
                                            onClick={() => {
                                                openAlert(
                                                    "Delete class",
                                                    `Do you want to delete class ${item.name}`,
                                                    () => {
                                                        deleteClass(item._id);
                                                    },
                                                );
                                            }}
                                            aria-label="delete"
                                        >
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
        classesList, getAllError, getAllMessage, getAllLoading, deleteError,
    },
}: any) => ({
    classesList,
    getAllError,
    getAllMessage,
    getAllLoading,
    deleteError,
});

const mapDispatchToProps = (dispatch: Dispatch, { schoolService }: any) => bindActionCreators({
    getAllClasses: () => classActions.getAllClasses(schoolService)(),
    getClassById: (classId: string) => classActions.getClassById(schoolService, classId)(),
    deleteClass: (classId: string) => classActions.deleteClass(schoolService, classId)(),
    clearDeleteClassError: () => classActions.clearDeleteClassError(),
    openClassEditor: () => classActions.openClassEditor(),
    setEditing: (editing: boolean) => classActions.setEditing(editing),
    openAlert: (
        title: string,
        content: string,
        cb: Function,
    ) => alertActions.openAlert(title, content, cb),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(ClassList));
