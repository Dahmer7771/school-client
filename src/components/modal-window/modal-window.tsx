import React from "react";
import { connect } from "react-redux";
import {
    Modal,
    Button,
} from "@material-ui/core";
import modalActions from "../../actions/modal.actions";
import { ModalProps } from "../../types";
import useModalWindowStyles from "./styles";

const ModalWindow: React.FC<ModalProps> = ({
    title, text, isModalOpen, close,
}: ModalProps) => {
    const classes = useModalWindowStyles();

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isModalOpen}
            onClose={close}
        >
            <div className={classes.paper}>
                <h2>{title}</h2>
                <p>{text}</p>
                <Button onClick={close}>Ок</Button>
            </div>
        </Modal>
    );
};

const mapDispatchToProps = {
    hideModal: modalActions.hideModal,
};

export default connect(null, mapDispatchToProps)(ModalWindow);
