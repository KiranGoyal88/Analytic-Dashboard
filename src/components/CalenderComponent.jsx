import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  LocalizationProvider,
  StaticDateRangePicker,
} from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import Box from "@mui/material/Box";

export default function BasicDateRangePicker() {
  const [calendarValue, setCalendarValue] = React.useState({
    startDate: "2020-01-01",
    endDate: "2020-02-01",
  });

  const [toggleCalendar, setToggleCalendar] = React.useState(false);

  const handleDateChange = (date) => {
    const start = new Date(date[0]).toLocaleDateString("en-US");
    const end = new Date(date[1]).toLocaleDateString("en-US");

    setCalendarValue({ startDate: start, endDate: end });
  };

  const handleCalendarToggle = () => {
    setToggleCalendar(!toggleCalendar);
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      localeText={{ start: "Start Date", end: "End Date" }}>
      <Box position="absolute">
        <TextField
          value={`${calendarValue.startDate} - ${calendarValue.endDate}`}
          onClick={handleCalendarToggle}
        />
        {toggleCalendar && (
          <React.Fragment>
            <StaticDateRangePicker
              displayStaticWrapperAs="desktop"
              value={[calendarValue.startDate, calendarValue.endDate]}
              onChange={(date) => handleDateChange(date)}
            />
            <span onClick={toggleCalendar}>&nbsp;</span>
          </React.Fragment>
        )}
      </Box>
    </LocalizationProvider>
  );
}
