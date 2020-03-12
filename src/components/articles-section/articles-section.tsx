import React, { useEffect } from "react";
import {
    Typography, Divider, Grid,
} from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import useNewsStyles from "./styles";
import Post from "../post/post";
import { ArticlesSectionProps } from "../../types";
import articlesActions from "../../actions/articles.actions";
import withSchoolService from "../hoc/with-school-service";

const ArticlesSection: React.FC<ArticlesSectionProps> = ({
    limit = 0,
    skip = 0,
    getAllArticles,
    articles,
}) => {
    const classes = useNewsStyles();

    useEffect((): void => {
        getAllArticles(skip, limit);
    }, [getAllArticles, skip, limit]);

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Посты
            </Typography>
            <Divider className={classes.divider} />
            <div>
                <Grid container spacing={3}>
                    {articles.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6} md={4}>
                            <Post {...post} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

const mapStateToProps = ({ articlesReducer: { articles } }: any) => ({
    articles,
});

const mapDispatchToProps = (
    dispatch: Dispatch,
    ownProps: ArticlesSectionProps,
) => bindActionCreators({
    getAllArticles: (skip, limit) => {
        return articlesActions.getAllArticles(ownProps.schoolService, skip, limit)();
    },
}, dispatch);

export default withSchoolService()(
    connect(mapStateToProps, mapDispatchToProps)(ArticlesSection),
);
