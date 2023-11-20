import { colors } from "@/colors";
import { Radio as RadioMui } from "@mui/material";
import { FastFieldProps } from "formik";
import { CSSProperties } from "react";
interface PropsI extends FastFieldProps {
  styleIcon?: CSSProperties;
  styleRadio?: CSSProperties;
  disabled?: boolean;
}

const Radio = (props: PropsI) => {
  const { field, form, styleIcon, styleRadio, disabled, ...rest } = props;
  const { name, value, onChange } = field;

  return (
    <div>
      <RadioMui
        size="small"
        onChange={onChange}
        name={name}
        value={value}
        {...rest}
        sx={{
          color: "#D0D5DD",
          ...styleRadio,
          "&.Mui-checked": {
            color: colors.radio.main,
          },
          "&.Mui-disabled": {
            color: "rgba(0, 0, 0, 0.26) !important",
          },
          "& .MuiSvgIcon-root": {
            ...styleIcon,
          },
        }}
        disabled={disabled && disabled}
      />
    </div>
  );
};

export default Radio;
