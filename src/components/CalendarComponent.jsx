import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  LocalizationProvider,
  StaticDateRangePicker
} from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import Box from "@mui/material/Box";

export default function CalendarComponent({ dateRange, setDateRange }) {
  const [toggleCalendar, setToggleCalendar] = React.useState(false);

  const handleDateChange = (date) => {
    const start = new Date(date[0]).toLocaleDateString("en-US");
    const end = new Date(date[1]).toLocaleDateString("en-US");

    setDateRange({ startDate: start, endDate: end });
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
          value={`${dateRange.startDate} - ${dateRange.endDate}`}
          onClick={handleCalendarToggle}
        />
        {toggleCalendar && (
          <React.Fragment>
            <StaticDateRangePicker
              displayStaticWrapperAs="desktop"
              value={[dateRange.startDate, dateRange.endDate]}
              onChange={(date) => handleDateChange(date)}
            />
            <span onClick={toggleCalendar}>&nbsp;</span>
          </React.Fragment>
        )}
      </Box>
    </LocalizationProvider>
  );
}
