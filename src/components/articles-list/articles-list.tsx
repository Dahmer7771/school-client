import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    Typography,
    Divider,
    Button,
    Paper,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CreateIcon from "@material-ui/icons/Create";
import { bindActionCreators, Dispatch } from "redux";
import withSchoolService from "../hoc/with-school-service";
import articlesActions from "../../actions/articles.actions";
import ArticlesSearchPanel from "../articles-search-panel";
import useStyles from "./styles";
import dialogWindowActions from "../../actions/dialog-window.actions";

const ArticlesList = ({
    articles,
    getAllArticles,
    deleteArticle,
    setArticleEditing,
    setUpdate,
    openDialogWindow,
}: any) => {
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
                        _id, title, content, image, date,
                    }: any, index: number) => (
                        <React.Fragment key={_id}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={image} />
                                </ListItemAvatar>
                                <div className={classes.contentWrapper}>
                                    <div className={classes.titleAndButtons}>
                                        <div className="primaryText">
                                            {title}
                                        </div>
                                        <Button
                                            onClick={() => {
                                                openDialogWindow(
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
                                    <div className={classes.content}>
                                        <div className={classes.secondaryText}>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                Ali Connors
                                            </Typography>
                                            <div
                                                dangerouslySetInnerHTML={{ __html: content }}
                                                className={classes.contentPreview}
                                            />
                                        </div>
                                        <div className={classes.date}>
                                            {date}
                                        </div>
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
}: any) => ({
    articles,
    editing,
});

const mapDispatchToProps = (dispatch: Dispatch, { schoolService }: any) => bindActionCreators({
    getAllArticles: (
        skip, limit,
    ) => articlesActions.getAllArticles(schoolService, skip, limit)(),
    deleteArticle: (id: string) => articlesActions.deleteArticle(schoolService, id)(),
    setArticleEditing: (
        editing: boolean,
        id: string,
    ) => articlesActions.setArticleEditing(editing, id),
    setUpdate: () => articlesActions.setUpdate(),
    openDialogWindow: (
        title: string,
        content: string,
        cb: any,
    ) => dialogWindowActions.openDialogWindow(title, content, cb),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(ArticlesList));
