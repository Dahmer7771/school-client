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
import { bindActionCreators, Dispatch } from "redux";
import useStyles from "./styles";
import editProfileActions from "../../actions/edit-profile.actions";
import withSchoolService from "../hoc/with-school-service";
import { ProfileDetailsView } from "../../types";
import { emailErrors, nameErrors, regExp } from "../../validation";
import classActions from "../../actions/class.actions";

const EditProfile = ({
    isProfileEditorOpen,
    closeEditor,
    currentUser,
    loading,
    updateUser,
    classList,
    getAllClasses,
}: any) => {
    const classes = useStyles();
    const {
        register, handleSubmit, errors,
    } = useForm<ProfileDetailsView>();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [grade, setGrade] = useState("");

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
        setGrade(currentUser.grade);
    }, [currentUser]);

    useEffect(() => {
        getAllClasses();
    }, [getAllClasses]);

    const onSubmit = (data: ProfileDetailsView) => {
        updateUser(currentUser._id, data);
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
                        {classList.map((item: any) => (
                            <option value={item._id}>{item.name}</option>
                        ))}
                    </Select>
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
    classReducer: { classList },
}: any) => ({
    isProfileEditorOpen,
    currentUser,
    editProfileError,
    editProfileMessage,
    loading,
    classList,
});

const mapDispatchToProps = (dispatch: Dispatch, { schoolService }: any) => bindActionCreators({
    closeEditor: () => editProfileActions.closeProfileEditor(),
    getAllClasses: () => classActions.getAllClasses(schoolService)(),
    updateUser: (
        id: string,
        data: {},
    ) => editProfileActions.updateProfileData(schoolService, id, data)(),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(EditProfile));
