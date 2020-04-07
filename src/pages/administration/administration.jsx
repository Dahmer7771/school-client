import React, { useState } from "react";
import { connect } from "react-redux";
import {
    Tabs,
    Tab,
} from "@material-ui/core";
import TabPanel from "../../components/tab-panel";
import UsersList from "../../components/users-list";
import ArticleCreator from "../../components/article-creator";
import UsersSearchPanel from "../../components/users-search-panel";
import ArticlesList from "../../components/articles-list";
import ClassList from "../../components/class-list";
import useStyles from "./styles";
import ClassEditor from "../../components/class-editor/class-editor";

const a11yProps = (index) => ({
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
});

const Administration = ({ editing }) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChangeTab}
                orientation="vertical"
                variant="scrollable"
                className={classes.tabs}
            >
                <Tab label="Пользователи" {...a11yProps(0)} />
                <Tab label="Статьи" {...a11yProps(1)} />
                <Tab label="Классы" {...a11yProps(2)} />
            </Tabs>

            <TabPanel value={value} index={0}>
                <UsersSearchPanel />
                <UsersList />
            </TabPanel>
            <TabPanel value={value} index={1}>
                {editing ? <ArticleCreator /> : <ArticlesList />}
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ClassList />
                <ClassEditor />
            </TabPanel>
        </div>
    );
};

const mapStateToProps = ({ articlesReducer: { editing } }) => ({
    editing,
});

export default connect(mapStateToProps, null)(Administration);
