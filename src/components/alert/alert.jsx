import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from "@material-ui/core";

const Alert = ({
    open, handleClose, title, content, cb, confirm = false,
}) => (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
    >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            {title}
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                {content}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button
                autoFocus
                onClick={() => {
                    cb();
                    handleClose();
                }}
                color="primary"
            >
                Ok
            </Button>
            { !confirm && (
                <Button
                    onClick={() => {
                        handleClose();
                    }}
                    color="primary"
                >
                    Cancel
                </Button>
            )}
        </DialogActions>
    </Dialog>
);

export default Alert;
