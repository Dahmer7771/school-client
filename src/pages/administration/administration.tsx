import React, { useState } from "react";
import { connect } from "react-redux";
import {
    AppBar,
    Tabs,
    Tab,
} from "@material-ui/core";
import TabPanel from "../../components/tab-panel";
import UsersList from "../../components/users-list";
import ArticleCreator from "../../components/article-creator";
import Timetable from "../../components/timetable";
import UsersSearchPanel from "../../components/users-search-panel";
import ArticlesList from "../../components/articles-list";

const a11yProps = (index: any) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
});

const Administration = ({ editing }: any) => {
    const [value, setValue] = useState(0);

    const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChangeTab}>
                    <Tab label="Пользователи" {...a11yProps(0)} />
                    <Tab label="Статьи" {...a11yProps(1)} />
                    <Tab label="Расписание" {...a11yProps(2)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                <UsersSearchPanel />
                <UsersList />
            </TabPanel>
            <TabPanel value={value} index={1}>
                {editing ? <ArticleCreator /> : <ArticlesList />}
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Timetable />
            </TabPanel>
        </div>
    );
};

const mapStateToProps = ({ articlesReducer: { editing } }: any) => ({
    editing,
});

export default connect(mapStateToProps, null)(Administration);
