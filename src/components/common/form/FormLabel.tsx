import type { FormLabelProps } from "@mui/material/FormLabel";
import MuiFormLabel, { formLabelClasses } from "@mui/material/FormLabel";
import React, { CSSProperties } from "react";

interface LabelProps extends FormLabelProps {
  title: string;
  name: string;
  required?: boolean;
  gutterBottom?: boolean;
  styleLabel?: CSSProperties;
}

const FormLabel = (props: LabelProps) => {
  const { title, name, required, gutterBottom, styleLabel, ...rest } = props;
  return (
    <MuiFormLabel
      sx={{
        fontFamily: "Inter, sans-serif",
        color: "#344054",
        display: "block",
        fontWeight: 700,
        fontSize: "14px",
        ...styleLabel,
        mb: gutterBottom ? "0.35em" : 0,
        [`& .${formLabelClasses.asterisk}`]: {
          color: "error.main",
        },
      }}
      htmlFor={name}
      required={required}
      {...rest}
    >
      {title}
    </MuiFormLabel>
  );
};

export default FormLabel;
