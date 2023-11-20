import { SxProps } from "@mui/material";
import Button from "@mui/material/Button";
import withStyles from "@mui/styles/withStyles";
import React, { CSSProperties } from "react";

interface ButtonProps {
  children: string | React.ReactNode;
  onEvent?: any;
  styleAdd?: CSSProperties;
  sx?: SxProps | any;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  positionIcon?: "start" | "end";
  variant?: "text" | "contained" | "outlined";
  background?: string;
}

// const ButtonCustom = withStyles(() => {
//   return {
//     root: {
//       "&.MuiButton-root": {
//         "&:hover": {
//           background: "unset",
//         },
//       },
//       "&.Mui-disabled": {
//         background: "green",
//       },
//     },
//   };
// })(Button);

const ButtonCommon = (props: ButtonProps) => {
  const {
    children,
    onEvent,
    sx,
    styleAdd,
    className,
    disabled,
    icon,
    positionIcon = "end",
    variant = "contained",
    background = "red",
    ...restProps
  } = props;

  return (
    <Button
      {...restProps}
      disabled={disabled}
      onClick={onEvent}
      startIcon={positionIcon === "start" && icon}
      endIcon={positionIcon === "end" && icon}
      className={className}
      variant={variant}
      sx={{
        "&.MuiButton-root": {
          color: "#333",
          borderColor: "#333",
          boxShadow: "none",
          background: variant === "contained" ? background : "#fff",
          textTransform: "unset",
          lineHeight: "24px",
          padding: "8px 16px",
          ...styleAdd,
          "&:hover": {
            background: variant === "contained" ? background : "",
          },
        },
        "&.Mui-disabled": {
          background: "green",
        },
      }}
    >
      {children}
    </Button>
  );
};
export default ButtonCommon;
//sx vs custom ngang cap
