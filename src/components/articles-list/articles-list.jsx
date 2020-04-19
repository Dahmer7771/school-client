import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    List,
    ListItem,
    Divider,
    Button,
    Paper,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CreateIcon from "@material-ui/icons/Create";
import { bindActionCreators } from "redux";
import withSchoolService from "../hoc/with-school-service";
import articlesActions from "../../actions/articles.actions";
import ArticlesSearchPanel from "../articles-search-panel";
import useStyles from "./styles";
import alertActions from "../../actions/alert.actions";

const ArticlesList = ({
    articles,
    getAllArticles,
    deleteArticle,
    setArticleEditing,
    setUpdate,
    openAlert,
}) => {
    const classes = useStyles();

    useEffect(() => {
        getAllArticles(0);
    }, [getAllArticles]);

    return (
        <>
            <ArticlesSearchPanel />
            <Paper>
                <List className={classes.root}>
                    {articles.map(({
                        _id, title, date,
                    }, index) => (
                        <React.Fragment key={_id}>
                            <ListItem alignItems="flex-start">
                                <div className={classes.contentWrapper}>
                                    <div className={classes.titleAndButtons}>
                                        <div className="primaryText">
                                            <div>
                                                {title}
                                            </div>
                                            <div className={classes.date}>
                                                <span className={classes.dateText}>
                                                    {`Создано:  `}
                                                </span>
                                                {date}
                                            </div>
                                        </div>
                                        <Button
                                            onClick={() => {
                                                openAlert(
                                                    "Confirm",
                                                    "Do you want to delete this article?",
                                                    () => deleteArticle(_id),
                                                );
                                            }}
                                            className={classes.button}
                                            size="small"
                                        >
                                            <DeleteForeverIcon />
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                setArticleEditing(true, _id);
                                                setUpdate();
                                            }}
                                            className={classes.button}
                                            size="small"
                                        >
                                            <CreateIcon />
                                        </Button>
                                    </div>
                                </div>
                            </ListItem>
                            {(index !== articles.length - 1) && <Divider component="li" />}
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        </>
    );
};

const mapStateToProps = ({
    articlesReducer: { articles, editing },
}) => ({
    articles,
    editing,
});

const mapDispatchToProps = (dispatch, { schoolService }) => bindActionCreators({
    getAllArticles: (
        skip, limit,
    ) => articlesActions.getAllArticles(schoolService, skip, limit)(),
    deleteArticle: (id) => articlesActions.deleteArticle(schoolService, id)(),
    setArticleEditing: (
        editing,
        id,
    ) => articlesActions.setArticleEditing(editing, id),
    setUpdate: () => articlesActions.setUpdate(),
    openAlert: (
        title,
        content,
        cb,
    ) => alertActions.openAlert(title, content, cb),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(ArticlesList));
