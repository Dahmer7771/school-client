import React from "react";
import {
    AppBar,
    Tabs,
    Tab,
} from "@material-ui/core";
import TabPanel from "../../components/tab-panel";
import News from "../news";

const a11yProps = (index: any) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
});

const Administration = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

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
                Users
            </TabPanel>
            <TabPanel value={value} index={1}>
                <News />
            </TabPanel>
            <TabPanel value={value} index={2}>
                Timetable
            </TabPanel>
        </div>
    );
};

export default Administration;
