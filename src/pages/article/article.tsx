import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    Container,
    Typography,
    Card,
    CardMedia,
} from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import withSchoolService from "../../components/hoc/with-school-service";
import useStyles from "./styles";
import { articlesActions } from "../../actions";
import Spinner from "../../components/spinner/spinner";

const Article = ({
    currentArticle,
    getArticleById,
    articleByIdError,
}: any) => {
    console.log("articleByIdError", articleByIdError);
    const classes = useStyles();
    let imagePath;
    const { id } = useParams();
    useEffect(() => {
        getArticleById(id);
    }, [getArticleById, id]);
    if (currentArticle) imagePath = currentArticle.image.replace("\\", "/");

    if (articleByIdError) {
        return (
            <Typography
                style={{ marginTop: "16px" }}
                align="center"
                variant="h5"
                color="textPrimary"
            >
                Сататья не найдена
            </Typography>
        );
    }
    if (!currentArticle) return <Spinner />;

    return (
        <Container>
            <Card className={classes.container}>
                <Typography variant="h4" component="h4" gutterBottom>
                    {currentArticle.title}
                </Typography>
                <CardMedia
                    className={classes.image}
                    image={`${window.origin}/${imagePath}`}
                    title="Contemplative Reptile"
                />
                <Typography
                    dangerouslySetInnerHTML={{ __html: currentArticle.content }}
                    variant="body2"
                    color="textPrimary"
                    component="p"
                />
                <Typography
                    variant="caption"
                    color="secondary"
                    component="p"
                    align="right"
                >
                    {currentArticle.date}
                </Typography>
            </Card>
        </Container>
    );
};

const mapStateToProps = ({ articlesReducer: { currentArticle, articleByIdError } }: any) => ({
    currentArticle,
    articleByIdError,
});

const mapDispatchToProps = (dispatch: Dispatch, { schoolService }: any) => bindActionCreators({
    getArticleById: (id: string) => articlesActions.getArticleById(schoolService, id)(),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(Article));
