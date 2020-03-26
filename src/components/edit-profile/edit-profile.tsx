import React from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField, InputLabel, Select } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import profileEditorActions from "../../actions/profile-editor.actions";
import useStyles from "./styles";

const EditProfile = ({ isProfileEditorOpen, closeEditor }: any) => {
    const classes = useStyles();

    const handleChangeStage = (e: any) => {
        console.log("Change", e);
    };

    return (
        <Dialog
            open={isProfileEditorOpen}
            onClose={closeEditor}
        >
            <div className={classes.flexContainer}>
                <DialogTitle>Title</DialogTitle>
                <Button onClick={closeEditor}>
                    <CloseIcon />
                </Button>
            </div>
            <DialogContent>
                <DialogContentText>
                    This is the content of modal window
                </DialogContentText>
                <form>
                    <TextField className={classes.input} label="Name" />
                    <TextField className={classes.input} label="Email" />
                    <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                    <Select
                        native
                        value=""
                        className={classes.input}
                        onChange={handleChangeStage}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>1</option>
                        <option value={20}>2</option>
                        <option value={30}>3</option>
                    </Select>
                </form>
            </DialogContent>
        </Dialog>
    );
};

const mapStateToProps = ({ profileEditorReducer: { isProfileEditorOpen } }: any) => ({
    isProfileEditorOpen,
});

const mapDispatchToProps = {
    closeEditor: () => profileEditorActions.closeProfileEditor(),
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
