import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
    AppBar,
    Tabs,
    Tab,
} from "@material-ui/core";
import { bindActionCreators, Dispatch } from "redux";
import TabPanel from "../../components/tab-panel";
import UsersList from "../../components/users-list";
import withSchoolService from "../../components/hoc/with-school-service";
import { usersActions } from "../../actions";
import ArticleCreator from "../../components/article-creator/article-creator";
import Timetable from "../../components/timetable/timetable";

const a11yProps = (index: any) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
});

const Administration = ({ getAllUsers, users }: any) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        getAllUsers();
    }, [getAllUsers]);

    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Пользователи" {...a11yProps(0)} />
                    <Tab label="Статьи" {...a11yProps(1)} />
                    <Tab label="Расписание" {...a11yProps(2)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                <UsersList users={users} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ArticleCreator />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Timetable />
            </TabPanel>
        </div>
    );
};

const mapStateToProps = ({ usersReducer: { users, usersError, errorMessage } }: any) => ({
    users,
    usersError,
    errorMessage,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => bindActionCreators({
    getAllUsers: () => usersActions.getAllUsers(ownProps.schoolService)(),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(Administration));
