import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
    TextField, InputLabel, Select,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { bindActionCreators } from "redux";
import useStyles from "./styles";
import editProfileActions from "../../actions/edit-profile.actions";
import withSchoolService from "../hoc/with-school-service";
import { emailErrors, nameErrors, regExp } from "../../validation";
import classActions from "../../actions/class.actions";

const EditProfile = ({
    isProfileEditorOpen,
    closeEditor,
    currentUser,
    loading,
    updateUser,
    classesList,
    getAllClasses,
}) => {
    const classes = useStyles();
    const {
        register, handleSubmit, errors,
    } = useForm();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [grade, setGrade] = useState("");
    const [avatar, setAvatar] = useState("");

    useEffect(() => {
        if (currentUser) {
            setName(currentUser.name);
            setEmail(currentUser.email);
            setAvatar(currentUser.avatar);
            if (currentUser.grade) {
                setGrade(currentUser.grade._id);
            }
        }
    }, [currentUser]);

    useEffect(() => {
        getAllClasses();
    }, [getAllClasses]);

    const onSubmit = (data) => {
        const formData = new FormData();
        console.log(data.name);
        console.log(data.email);
        console.log(data.grade);
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("grade", data.grade);
        if (avatar) formData.append("avatar", avatar);
        updateUser(currentUser._id, formData);
    };

    const onClose = () => closeEditor();

    return (
        <Dialog
            open={isProfileEditorOpen}
            onClose={onClose}
            maxWidth="lg"
        >
            <div className={classes.flexContainer}>
                <DialogTitle>Profile editor</DialogTitle>
                <Button onClick={onClose}>
                    <CloseIcon />
                </Button>
            </div>
            <DialogContent>
                <DialogContentText>
                    Update your profile details
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
                    />
                    <TextField
                        defaultValue={email}
                        error={!!errors.email}
                        name="email"
                        label="Email"
                        className={classes.input}
                        helperText={errors.email && emailErrors[errors.email.type]}
                        inputRef={register({ required: true, pattern: regExp.email })}
                    />
                    <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                    <Select
                        native
                        name="grade"
                        defaultValue={grade}
                        className={classes.input}
                        inputRef={register}
                    >
                        <option aria-label="None" value="" />
                        {classesList.map((item) => (
                            <option key={item._id} value={item._id}>{item.name}</option>
                        ))}
                    </Select>
                    <input
                        accept="image/*"
                        style={{ display: "none" }}
                        id="upload-avatar"
                        multiple
                        type="file"
                        onChange={(e) => {
                            if (e.target.files !== null) setAvatar(e.target.files[0]);
                        }}
                    />
                    <label htmlFor="upload-avatar">
                        <Button disabled={loading} component="span">Upload avatar</Button>
                    </label>
                    <Button disabled={loading} type="submit">
                        Update
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

const mapStateToProps = ({
    editProfileReducer: {
        editProfileError, editProfileMessage, isProfileEditorOpen, loading,
    },
    authReducer: { currentUser },
    classReducer: { classesList },
}) => ({
    isProfileEditorOpen,
    currentUser,
    editProfileError,
    editProfileMessage,
    loading,
    classesList,
});

const mapDispatchToProps = (dispatch, { schoolService }) => bindActionCreators({
    closeEditor: () => editProfileActions.closeProfileEditor(),
    getAllClasses: () => classActions.getAllClasses(schoolService)(),
    updateUser: (
        id,
        data,
    ) => editProfileActions.updateProfileData(schoolService, id, data)(),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(EditProfile));
