import React, { useState } from "react";
import {
    Appointments,
    DateNavigator,
    Scheduler,
    TodayButton,
    Toolbar,
    AppointmentTooltip,
    DayView,
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { Paper } from "@material-ui/core";
import moment from "moment";

const Timetable = () => {
    const today = moment("2020 03 20", "YYYY MM DD").toISOString();
    const [currentDate, setCurrentDate] = useState(today);
    const currentDateChange = (date) => setCurrentDate(date);
    const data = [
        {
            startDate: moment("2020 03 20 9:00", "YYYY MM DD kk:mm").toISOString(),
            endDate: moment("2020 03 20 10:00", "YYYY MM DD kk:mm").toISOString(),
            title: "Meeting",
        },
    ];

    return (
        <Paper>
            <Scheduler
                data={data}
            >
                <ViewState
                    currentDate={currentDate}
                    onCurrentDateChange={currentDateChange}
                />
                <DayView
                    startDayHour={9}
                    endDayHour={19}
                />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <Appointments />
                <AppointmentTooltip />
            </Scheduler>
        </Paper>
    );
};

export default Timetable;
