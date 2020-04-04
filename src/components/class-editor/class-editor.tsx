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
import { bindActionCreators, Dispatch } from "redux";
import useStyles from "./styles";
import { nameErrors, regExp } from "../../validation";
import { ProfileDetailsView } from "../../types";
import withSchoolService from "../hoc/with-school-service";
import { alertActions, usersActions } from "../../actions";
import classActions from "../../actions/class.actions";

const ClassEditor = ({
    teachers,
    getAllTeachers,
    loading,
    editing,
    closeClassEditor,
    classEditorOpen,
    createClass,
    currentClass,
    updateClass,
}: any) => {
    const classes = useStyles();
    const {
        register, handleSubmit, errors,
    } = useForm<ProfileDetailsView>();
    const [name, setName] = useState("");
    const [teacher, setTeacher] = useState("");

    useEffect(() => {
        getAllTeachers();
    }, [getAllTeachers]);

    useEffect(() => {
        if (currentClass) {
            setName(currentClass.name);
            setTeacher(currentClass.classroomTeacher._id);
        }
    }, [currentClass]);

    const onSubmit = (data: ProfileDetailsView) => {
        if (editing) {
            console.log("update");
            updateClass(currentClass._id, data);
        } else {
            console.log("create");
            createClass(data);
        }
    };

    if (editing && !currentClass) return null;

    return (
        <Dialog
            open={classEditorOpen}
            onClose={closeClassEditor}
            maxWidth="lg"
        >
            <div className={classes.flexContainer}>
                <DialogTitle>Class editor</DialogTitle>
                <Button onClick={closeClassEditor}>
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
                        onChange={(e: any) => setName(e.target.value)}
                    />
                    <InputLabel htmlFor="teacher">Teacher</InputLabel>
                    <Select
                        native
                        name="classroomTeacher"
                        defaultValue={teacher}
                        className={classes.input}
                        inputRef={register}
                        onChange={(e: any) => setTeacher(e.target.value.toString())}
                    >
                        <option aria-label="None" value="" />
                        {teachers.map((item: any) => (
                            <option key={item._id} value={item._id}>{item.name}</option>
                        ))}
                    </Select>
                    <Button type="submit" color="primary" disabled={loading}>
                        Update
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

const mapStateToProps = ({
    usersReducer: { teachers },
    classReducer: {
        createClassError,
        loading,
        classEditorOpen,
        editing,
        updateClass,
        currentClass,
        classErrorMessage,
    },
}: any) => ({
    teachers,
    createClassError,
    loading,
    classEditorOpen,
    editing,
    updateClass,
    currentClass,
    classErrorMessage,
});

const mapDispatchToProps = (dispatch: Dispatch, { schoolService }: any) => bindActionCreators({
    getAllTeachers: () => usersActions.getAllTeachers(schoolService)(),
    getAllClasses: () => classActions.getAllClasses(schoolService)(),
    createClass: (data: any) => classActions.createClass(schoolService, data)(),
    updateClass: (id: string, data: any) => classActions.updateClass(schoolService, id, data)(),
    closeClassEditor: () => classActions.closeClassEditor(),
    clearGetClassByIdError: () => classActions.clearGetClassByIdError(),
    openAlert: (
        title: string,
        content: string,
        cb: any,
    ) => alertActions.openAlert(title, content, cb, true),
    setEditing: (editing: boolean) => classActions.setEditing(editing),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(ClassEditor));
