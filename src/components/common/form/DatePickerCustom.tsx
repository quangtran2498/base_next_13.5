import Calender from "@/icons/calender";
import { TextField } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import viLocale from "date-fns/locale/vi";
import { FastFieldProps } from "formik";
import { isEmpty } from "lodash";
import moment from "moment";
import { CSSProperties } from "react";

interface PropsI extends FastFieldProps {
  styleInput?: CSSProperties;
  styleBorder?: CSSProperties;
  onOpen?: () => void;
  onClose?: () => void;
}

const CssTextField = withStyles((_theme) => ({
  root: {},
}))(TextField);
class CustomString extends String {
  charAt(_: number): string {
    return this.valueOf();
  }
}
const weekDays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
const customWeekDays = weekDays.map((day) => new CustomString(day) as string);

class CustomizeDateAdapter extends AdapterDateFns {
  getWeekdays = (): string[] => customWeekDays;
}

const DataPicker = (props: PropsI) => {
  const { form, field, styleInput, styleBorder, onOpen, onClose } = props;
  const { name, value } = field;

  const { errors, touched, handleChange } = form;
  return (
    <LocalizationProvider dateAdapter={CustomizeDateAdapter} locale={viLocale}>
      <DesktopDatePicker
        onOpen={onOpen}
        onClose={onClose}
        inputFormat="dd/MM/yyyy"
        onChange={(value: Date | null, keyboardInputValue?: string) => {
          const spl = keyboardInputValue?.split("/");
          if (keyboardInputValue || !value) {
            if (spl && spl[0]?.length === 2 && spl[1]?.length === 2 && spl[2]?.length === 4 && `${value}` == "Invalid Date") {
              form?.setFieldTouched(name, true);
              handleChange(name)("Invalid Date");
            } else {
              if (keyboardInputValue?.length === 10) {
                form?.setFieldTouched(name, false);
                const value = moment(keyboardInputValue, "DD-MM-YYYY").format("YYYY-MM-DD");
                handleChange(name)(value);
              }
            }
          } else {
            form?.setFieldTouched(name, true);
            const valueDate = new Date(value);
            handleChange(name)(valueDate.toISOString());
          }
        }}
        value={value ? value : null}
        maxDate={new Date()}
        renderInput={(props: any) => (
          <CssTextField
            {...props}
            autoComplete="off"
            name={name}
            margin="normal"
            error={touched[name] && Boolean(errors[name])}
            helperText={touched[name] && errors[name] && <>{errors[name]}</>}
            fullWidth
            onBlur={(e) => {
              const value = e.target.value;
              form?.setFieldTouched(name, true);
              if (isEmpty(value)) {
                handleChange(name)("");
              } else {
                if (value.length === 10) {
                  const valueConvert = moment(value, "DD-MM-YYYY").format("YYYY-MM-DD");
                  handleChange(name)(valueConvert);
                } else {
                  handleChange(name)("Invalid Date");
                }
              }
            }}
            sx={{
              "&.MuiFormControl-root": {
                margin: "0",
                "& .MuiInputBase-root": {
                  borderRadius: "0",
                  "& input": {
                    border: "none",
                    padding: "0",
                    minHeight: "56px",
                    paddingLeft: "16px",
                    ...styleInput,
                  },
                  "& fieldset": {
                    borderRadius: "4px",
                    borderColor: "#E0E0E0",
                    ...styleBorder,
                  },
                },
                "& p": {
                  color: "red",
                  fontSize: "10px",
                  margin: "5px 0 0 0 ",
                },
                "& .MuiButtonBase-root": {
                  width: "fit-content",
                  "& .MuiSvgIcon-root": {},
                },
              },
              "& + .MuiPopperUnstyled-root": {
                zIndex: 9999,
              },
            }}
          />
        )}
        components={{
          OpenPickerIcon: Calender,
        }}
      />
    </LocalizationProvider>
  );
};

export default DataPicker;
