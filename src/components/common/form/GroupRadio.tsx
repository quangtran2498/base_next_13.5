import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import { Field, useFormikContext } from "formik";
import { CSSProperties } from "react";
import Radio from "./Radio";

interface PropsI {
  list: { id: number; value: string | boolean; label: string; image?: string }[];
  name: string;
  defaultValue?: string | number | boolean | null;
  styleFormControlLabel?: CSSProperties;
  styleRadioGroup?: CSSProperties;
  styleTextLable?: CSSProperties;
  labelPlacement?: "bottom" | "top" | "end" | "start";
  styleRadio?: CSSProperties;
  styleIcon?: CSSProperties;
  styleFormControl?: CSSProperties;
  disabled?: boolean;
  valueActive?: string | boolean | any;
  styleLableActive?: CSSProperties;
}

const GroupRadioCustom = (props: PropsI) => {
  const {
    list,
    defaultValue,
    name,
    styleFormControl,
    styleFormControlLabel,
    styleRadioGroup,
    labelPlacement,
    styleTextLable,
    styleRadio,
    styleIcon,
    disabled,
    valueActive,
    styleLableActive,
  } = props;
  const { setFieldValue } = useFormikContext();

  return (
    <div>
      <FormControl sx={{ width: "100%", ...styleFormControl }}>
        <RadioGroup name={name} defaultValue={defaultValue} sx={{ ...styleRadioGroup }}>
          {list.map((field) => {
            return (
              <FormControlLabel
                key={field.id}
                value={field.value}
                className="gender"
                onChange={() => setFieldValue(name, field.value)}
                control={<Field component={Radio} styleIcon={styleIcon} styleRadio={styleRadio} disabled={disabled} />}
                label={field.label}
                labelPlacement={labelPlacement ? labelPlacement : "start"}
                sx={{
                  margin: "0",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "fit-content",
                  ...styleFormControlLabel,
                  "& .MuiTypography-root": {
                    fontSize: "16px",
                    ...styleTextLable,
                    color: !disabled && valueActive && valueActive === field.value ? { color: "#3F58D1" } : {},
                  },
                }}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default GroupRadioCustom;

export const listDefault = [
  { id: 1, value: "male", label: "nam" },
  { id: 2, value: "female", label: "nu" },
];
