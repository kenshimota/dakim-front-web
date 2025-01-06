import React from "react";
import dayjs from "dayjs";

import FormControl from "@mui/material/FormControl";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { useForm } from "../Form";

function DatePickerForm({
  name,
  onChange: change,
  error,
  errors: errs,
  disabled,
  ...props
}) {
  const formi = useForm();
  const { values, errors, disabled: d, handleChange } = formi;
  const value = values[name] || "";
  error = error || errors[name] || (errs && errs[name]);
  disabled = disabled || d;

  const onChange = (e) => {
    const event = {
      target: {
        name: name,
        value: e.$d,
      },
    };

    handleChange(event);
    if (change) {
      change(event);
    }
  };

  return (
    <FormControl fullWidth>
      <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
        <DemoContainer fullWidth components={["DatePicker"]}>
          <DatePicker
            slotProps={{
              textField: {
                fullWidth: true,
                error: Boolean(error),
                helperText: error || "",
              },
            }}
            value={dayjs(value)}
            onChange={onChange}
            {...props}
          />
        </DemoContainer>
      </LocalizationProvider>
    </FormControl>
  );
}

export default DatePickerForm;
