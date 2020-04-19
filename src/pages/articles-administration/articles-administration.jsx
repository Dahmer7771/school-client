import React from "react";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
import ArticleCreator from "../../components/article-creator";
import ArticlesList from "../../components/articles-list";
import useStyles from "./styles";

const ArticlesAdministration = ({ editing }) => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            {editing ? <ArticleCreator /> : <ArticlesList />}
        </Container>
    );
};

const mapStateToProps = ({ articlesReducer: { editing } }) => ({
    editing,
});

export default connect(mapStateToProps, null)(ArticlesAdministration);
