import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";
import useArticleCreatorStyles from "../../pages/administration/styles";

const ArticleCreator = () => {
    const classes = useArticleCreatorStyles();
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    // useEffect(() => {
    //     const html = "<p>Текст...</p>";
    //     const contentBlock = htmlToDraft(html);
    //     const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    //     setEditorState(EditorState.createWithContent(contentState));
    // }, [editorState]);

    const onEditorStateChange = (newEditorState: any) => {
        setEditorState(newEditorState);
    };

    return (
        <Paper elevation={2}>
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

export default ArticleCreator;
