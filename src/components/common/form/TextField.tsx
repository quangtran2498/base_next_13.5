import { CSSProperties } from "react";
import { Box, TextField as TextFieldMui } from "@mui/material";
import { FastFieldProps } from "formik";
import { InputAdornment } from "@mui/material";
import FormLabel from "./FormLabel";
import { colors } from "@/colors";

interface Props extends FastFieldProps {
  label?: string;
  type?: string;
  className?: string;
  size?: "small" | "medium" | undefined;
  placeholder?: string;
  icon?: React.ReactNode | any;
  required?: boolean;
  disabled?: boolean;
  border?: string;
  onFocus?: () => void;
  readOnly?: boolean;
  onClick?: () => void;
  positionIcon?: "start" | "end";
  styleRoot?: CSSProperties;
  styleInput?: CSSProperties;
  styleLabel?: CSSProperties;
  styleFieldset?: CSSProperties;
}

export const TextField = (props: Props) => {
  const {
    label,
    type = "text",
    field,
    form,
    className,
    size = "medium",
    placeholder,
    icon,
    styleInput,
    onFocus,
    required,
    styleLabel,
    border,
    styleFieldset,
    styleRoot,
    readOnly = false,
    onClick,
    positionIcon,
    // disabled,
    ...rest
  } = props;
  const { name } = field;
  const { errors, touched, handleChange, handleBlur, setFieldTouched } = form;

  return (
    <Box>
      {label && <FormLabel required={required} name={name} title={label} style={styleLabel}></FormLabel>}
      <TextFieldMui
        {...rest}
        onClick={onClick && onClick}
        autoComplete="off"
        inputProps={{ className: props.className, readOnly: readOnly }}
        variant="outlined"
        name={name}
        type={type}
        fullWidth
        onChange={handleChange}
        onFocus={() => {
          onFocus && onFocus();
          setFieldTouched(name);
        }}
        onBlur={handleBlur}
        placeholder={placeholder}
        error={touched[name] && Boolean(errors[name])}
        helperText={touched[name] && errors[name] && <>{errors[name]}</>}
        InputProps={
          icon && {
            [positionIcon === "start" ? "startAdornment" : "endAdornment"]: <InputAdornment position="end">{icon}</InputAdornment>,
          }
        }
        sx={{
          "& p": {
            color: "#F04438",
            margin: "8px 0 0 0",
          },
          "& .MuiInputBase-multiline": {
            padding: "4px",
          },
          "& .MuiInputBase-multiline.Mui-disabled": {
            background: "#EBEBF0",
          },
          "& .MuiOutlinedInput-root textarea": {
            minHeight: "16px !important",
            paddingLeft: "14px",
            paddingRight: "14px",
            paddingTop: "9px",
            paddingBottom: "9px",
            overflow: "hidden",
            "&::placeholder": {
              color: "#BABABA",
            },
          },
          "& .MuiInputBase-adornedEnd": {},
          "& .MuiInputBase-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: "#EAECF0",
          },
          "& .MuiInputBase-root.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FDA29B",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            marginTop: "4px",
            paddingRight: "0px",
            ...styleRoot,
            "& input": {
              background: colors.input.background.main,
              borderRadius: "50px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowarp",
              lineHeight: "48px",
              width: "100%",
              minHeight: "44px",
              padding: "0 0 0 16px",
              fontSize: "16px",
              color: "#22313F",
              border: "none",
              paddingLeft: positionIcon === "start" ? "0" : "16px",
              ...styleInput,
              "&::placeholder": {
                color: "#BABABA",
              },
            },
            "& select": {
              background: colors.input.background.main,
              borderRadius: "4px",
              padding: "0 32px 0 14px",
              border: `1px solid ${colors.input.border.main}`,
            },
            "& textarea": {
              background: colors.input.border.main,
              border: `1px solid ${colors.input.border.main}`,
              minHeight: "40px",
            },
            "& .Mui-disabled": {
              background: "#F9FAFB",
              color: "#98A2B3 !important",
            },
            "& .MuiInputBase-inputAdornedEnd": {
              border: "none",
              background: "none",
            },
            "& fieldset": {
              borderRadius: "4px",
              padding: "0px !important",
              border: `1px solid ${colors.input.border.main}`,
              ...styleFieldset,
            },
            "& .MuiInputAdornment-root": {
              marginRight: "16px",
            },
          },
        }}
      />
    </Box>
  );
};
