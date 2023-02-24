import React, {useRef} from 'react';
import Card from "@mui/material/Card";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import dateFormat from 'dateformat';
export default function BasicDatePicker() {
  const datePickerRef = useRef(null);
  const [value, setValue] = React.useState(null);
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "10px",
        p: "5px",
        mb: "5px",
        minWidth: 120 
      }}
    >
  
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <DatePicker
          label="Contacted Date"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          
          renderInput={(params) => <TextField {...params} fullWidth />}
        /> */}
          <DatePicker
            showIcon
            selected={startDate}
            value={value}
            showYearDropdown
            showMonthDropdown
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            ref={datePickerRef}
            className="form-control"
            selectsRange
            placeholderText="Select Date"
            peekNextMonth  
            dropdownMode="select"                    
          />
      </LocalizationProvider>
    </Card>
  );
}