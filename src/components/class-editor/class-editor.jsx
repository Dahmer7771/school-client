import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Button, Select, TextField, InputLabel,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useForm } from "react-hook-form";
import { bindActionCreators } from "redux";
import useStyles from "./styles";
import { nameErrors, regExp } from "../../validation";
import withSchoolService from "../hoc/with-school-service";
import { alertActions, usersActions } from "../../actions/index";
import classActions from "../../actions/class.actions";

const ClassEditor = ({
    teachers,
    getAllTeachers,
    getByIdLoading,
    editing,
    closeClassEditor,
    classEditorOpen,
    createClass,
    currentClass,
    updateClass,
    getAllClasses,
    createError,
    createMessage,
    clearCreateError,
    updateError,
    updateMessage,
    clearUpdateError,
    openAlert,
}) => {
    const classes = useStyles();
    const {
        register, handleSubmit, errors,
    } = useForm();
    const [name, setName] = useState("");
    const [teacher, setTeacher] = useState("");

    const clearInputs = () => {
        setName("");
        setTeacher("");
    };

    if (createError) openAlert("Помилка", createMessage, clearCreateError, true);
    if (updateError) openAlert("Помилка", updateMessage, clearUpdateError, true);

    useEffect(() => {
        getAllTeachers();
    }, [getAllTeachers]);

    useEffect(() => {
        if (editing && currentClass) {
            setName(currentClass.name);
            setTeacher(currentClass.classroomTeacher._id);
        } else if (!editing) {
            clearInputs();
        }
    }, [currentClass, editing]);

    const onSubmit = (data) => {
        if (editing) {
            updateClass(currentClass._id, data);
        } else {
            createClass(data);
        }
        getAllClasses();
    };

    if (editing && !currentClass) return null;

    return (
        <Dialog
            open={classEditorOpen}
            onClose={() => {
                clearInputs();
                closeClassEditor();
            }}
            maxWidth="lg"
        >
            <div className={classes.flexContainer}>
                <DialogTitle>Class editor</DialogTitle>
                <Button onClick={() => {
                    clearInputs();
                    closeClassEditor();
                }}
                >
                    <CloseIcon />
                </Button>
            </div>
            <DialogContent>
                <DialogContentText>
                    Update class info
                </DialogContentText>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        defaultValue={name}
                        error={!!errors.name}
                        name="name"
                        label="Name"
                        className={classes.input}
                        helperText={errors.name && nameErrors[errors.name.type]}
                        inputRef={register({ required: true, pattern: regExp.name })}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <InputLabel htmlFor="teacher">Teacher</InputLabel>
                    <Select
                        native
                        name="classroomTeacher"
                        defaultValue={teacher}
                        className={classes.input}
                        inputRef={register}
                        onChange={(e) => setTeacher(e.target.value.toString())}
                    >
                        <option aria-label="None" value="" />
                        {teachers.map((item) => (
                            <option key={item._id} value={item._id}>{item.name}</option>
                        ))}
                    </Select>
                    <Button type="submit" color="primary" disabled={getByIdLoading}>
                        {editing ? "Оновити" : "Створити"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

const mapStateToProps = ({
    usersReducer: { teachers },
    classReducer: {
        getByIdLoading,
        classEditorOpen,
        editing,
        updateClass,
        currentClass,
        createError,
        createMessage,
        updateError,
        updateMessage,
    },
}) => ({
    teachers,
    getByIdLoading,
    classEditorOpen,
    editing,
    updateClass,
    currentClass,
    createError,
    createMessage,
    updateError,
    updateMessage,
});

const mapDispatchToProps = (dispatch, { schoolService }) => bindActionCreators({
    getAllTeachers: () => usersActions.getAllTeachers(schoolService)(),
    getAllClasses: () => classActions.getAllClasses(schoolService)(),
    createClass: (data) => classActions.createClass(schoolService, data)(),
    updateClass: (id, data) => classActions.updateClass(schoolService, id, data)(),
    closeClassEditor: () => classActions.closeClassEditor(),
    clearGetClassByIdError: () => classActions.clearGetClassByIdError(),
    openAlert: (
        title,
        content,
        cb,
    ) => alertActions.openAlert(title, content, cb, true),
    setEditing: (editing) => classActions.setEditing(editing),
    clearCreateError: () => classActions.clearCreateClassError(),
    clearUpdateError: () => classActions.clearUpdateClassError(),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(ClassEditor));
