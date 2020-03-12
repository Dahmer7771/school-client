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
import ArticleCreator from "../../components/article-creator";
import Timetable from "../../components/timetable/timetable";
import UsersSearchPanel from "../../components/users-search-panel";

const a11yProps = (index: any) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
});

const Administration = ({
    getAllUsers, updateUser, users, currentUser,
}: any) => {
    const [value, setValue] = useState(0);

    const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeRole = (event: any, id: string) => {
        if (currentUser._id === id) return;
        const role = event.target.value;
        updateUser(id, { role });
    };

    const handleChangeActivity = (id: string, active: boolean) => {
        if (currentUser._id === id) return;
        updateUser(id, { active });
    };

    useEffect(() => {
        getAllUsers();
    }, [getAllUsers]);

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
                <UsersSearchPanel
                    getAllUsers={getAllUsers}
                />
                <UsersList
                    users={users}
                    handleChangeRole={handleChangeRole}
                    handleChangeActivity={handleChangeActivity}
                />
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

const mapStateToProps = ({
    usersReducer: { users, usersError, errorMessage },
    authReducer: { currentUser },
}: any) => ({
    users,
    usersError,
    errorMessage,
    currentUser,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => bindActionCreators({
    getAllUsers: (active) => usersActions.getAllUsers(ownProps.schoolService, active)(),
    updateUser: (userId, role) => usersActions.updateUser(ownProps.schoolService, userId, role)(),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(Administration));
