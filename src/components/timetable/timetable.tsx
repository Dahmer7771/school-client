import React, { useState } from "react";
import {
    Appointments,
    DateNavigator,
    Scheduler,
    TodayButton,
    Toolbar,
    WeekView,
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { Paper } from "@material-ui/core";
// import useScheluderStyles from "./styles";

const Timetable = () => {
    const [currentDate, setCurrentDate] = useState("2018-06-27");
    const currentDateChange = (date: any) => setCurrentDate(date);
    const data = [
        {
            startDate: "2020-02-28 10:00",
            endDate: "2020-02-28 11:00",
            title: "Meeting",
        },
        {
            startDate: "2020-02-28 9:00",
            endDate: "2020-02-28 19:30",
            title: "Go to a gym",
        },
    ];

    return (
        <Paper>
            <Scheduler
                data={data}
                height={660}
            >
                <ViewState
                    currentDate={currentDate}
                    onCurrentDateChange={currentDateChange}
                />
                <WeekView
                    startDayHour={9}
                    endDayHour={19}
                />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <Appointments />
            </Scheduler>
        </Paper>
    );
};

export default Timetable;
