import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    Typography,
    Divider,
} from "@material-ui/core";
import { bindActionCreators, Dispatch } from "redux";
import useStyles from "./styles";
import withSchoolService from "../hoc/with-school-service";
import articlesActions from "../../actions/articles.actions";

const ArticlesList = ({ articles, getAllArticles }: any) => {
    const classes = useStyles();

    useEffect(() => {
        getAllArticles(0);
    }, [getAllArticles]);

    return (
        <List className={classes.root}>
            {articles.map(({
                _id, title, content, image, date,
            }: any, index: number) => (
                <React.Fragment key={_id}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={image} />
                        </ListItemAvatar>
                        <div className={classes.contentContainer}>
                            <div className="primaryText">
                                {title}
                            </div>
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
                    </ListItem>
                    {(index !== articles.length - 1) && <Divider component="li" />}
                </React.Fragment>
            ))}
        </List>
    );
};

const mapStateToProps = ({ articlesReducer: { articles } }: any) => ({
    articles,
});

const mapDispatchToProps = (dispatch: Dispatch, { schoolService }: any) => bindActionCreators({
    getAllArticles: (
        skip, limit,
    ) => articlesActions.getAllArticles(schoolService, skip, limit)(),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(ArticlesList));
