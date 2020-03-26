import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import {
    convertToRaw, EditorState, ContentState,
} from "draft-js";
import { Paper } from "@material-ui/core";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import htmlToDraft from "html-to-draftjs";
import useStyles from "./styles";

const TextEditor = ({ content, setContent }: any) => {
    const classes = useStyles();
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    useEffect(() => {
        const contentBlock = htmlToDraft(content);
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        const newEditorState = EditorState.createWithContent(contentState);
        setEditorState(newEditorState);
        // eslint-disable-next-line
    }, []);

    const onEditorStateChange = (newEditorState: any) => {
        setEditorState(newEditorState);
        const newContent = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        setContent(newContent);
    };

    return (
        <Paper elevation={1}>
            <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName={classes.editor}
                onEditorStateChange={onEditorStateChange}
            />
            <textarea
                style={{ display: "none" }}
                disabled
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            />
        </Paper>
    );
};

export default TextEditor;
