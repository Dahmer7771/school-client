import React from "react";
import { connect } from "react-redux";
import {
    TextField,
    Button,
} from "@material-ui/core";
import { bindActionCreators } from "redux";
import articlesActions from "../../actions/articles.actions";
import withSchoolService from "../hoc/with-school-service";
import useStyles from "./styles";

const ArticlesSearchPanel = ({
    term, setArticlesTerm, getAllArticles, setArticleEditing, setCreate,
}) => {
    const classes = useStyles();

    const onSubmit = (e) => {
        e.preventDefault();
        getAllArticles(term);
    };

    return (
        <form onSubmit={(e) => onSubmit(e)} className={classes.container}>
            <TextField
                className={classes.input}
                size="small"
                label="Outlined"
                variant="outlined"
                value={term}
                onChange={(e) => setArticlesTerm(e.target.value)}
            />
            <Button type="submit" className={classes.button} variant="contained" color="primary">Поиск</Button>
            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={() => {
                    setArticleEditing();
                    setCreate();
                }}
            >
                Создать
            </Button>
        </form>
    );
};

const mapStateToProps = ({ articlesReducer: { term } }) => ({
    term,
});

const mapDispatchToProps = (dispatch, { schoolService }) => bindActionCreators({
    setArticlesTerm: (term) => articlesActions.setArticlesTerm(term),
    getAllArticles: (term) => articlesActions.getAllArticles(schoolService, 0, 0, term)(),
    setArticleEditing: () => articlesActions.setArticleEditing(true),
    setCreate: () => articlesActions.setCreate(),
}, dispatch);

export default withSchoolService()(
    connect(mapStateToProps, mapDispatchToProps)(ArticlesSearchPanel),
);
